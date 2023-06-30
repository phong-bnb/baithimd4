import { classroomModel } from "../model/schemas/classroom.model";
import { studentModel } from "../model/schemas/student.model";


export class StudentControllers {
    static async getCreateNewStudentPage(req: any, res: any) {
        const student = await studentModel.find()
        const classrooms = await classroomModel.find()
        res.render("create",{classrooms: classrooms});
    }
    static async createNewStudent (req:any, res:any){
        try{
        const newStudent = new studentModel(req.body)
                await newStudent.save();
                res.redirect("/student/list")
        } catch (error){
            res.render("notfound")
        }
    }
    static async getDetailStudentPage(req:any, res:any){
        try{
            const classrooms = await classroomModel.find();
            const student = await studentModel.findOne ({_id: req.params.id}).populate({
                path:"classroom",
                select: "name",
            })
            if(student){
                res.render("detail",{student:student, classrooms:classrooms})
            } else {
                res.render("notfound")
            }
        } catch (error){
            res.render("notfound")
        }
    }

    static async getListStudentsPage (req:any, res:any){
        try{
            let query = {};
            if(req.body.classroom){
                query = {classroom: req.body.classroom}
            }
            let classrooms = await classroomModel.find();
            const students = await studentModel.find(query).populate({
                path: "classroom",
                select: "name",
            }).sort({pointLT:1});
            res.render('list',{students:students, classrooms: classrooms})
        } catch (error){
            res.render("notfound")
        }
    }
    static async getUpdateStudentPage(req:any, res:any){
        try{
            const classrooms = await classroomModel.find();
            const studentNeedToUpdate = await studentModel.findOne ({_id: req.params.id}).populate({
                path:"classroom",
                select: "name",
            })
            if(studentNeedToUpdate){
                res.render("update",{student:studentNeedToUpdate, classrooms:classrooms})
            } else res.render("notfound")
        } catch (error){
            res.render("notfound")
        }
    }
    static async updateStudent (req:any, res:any){
        try{
            const {name, classroom, pointLT, pointTH, description, evaluated} = req.body;
            const studentNeedToUpdate = await studentModel.findOne ({_id: req.params.id});
            studentNeedToUpdate.name = name;
            studentNeedToUpdate.classroom = classroom;
            studentNeedToUpdate.pointLT = pointLT;
            studentNeedToUpdate.pointTH = pointTH;
            studentNeedToUpdate.description = description;
            studentNeedToUpdate.evaluated = evaluated;
            studentNeedToUpdate.save();
            res.redirect("/student/list")
        } catch (error){
            res.render("notfound")
        }
    }
    static async deleteStudent (req:any, res:any){
        await studentModel.deleteOne({_id:req.params.id})
        res.redirect("/student/list")
    }


}
