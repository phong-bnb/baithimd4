"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const classroom_model_1 = require("../model/schemas/classroom.model");
const student_model_1 = require("../model/schemas/student.model");
class StudentControllers {
    static async getCreateNewStudentPage(req, res) {
        const student = await student_model_1.studentModel.find();
        const classrooms = await classroom_model_1.classroomModel.find();
        res.render("create", { classrooms: classrooms });
    }
    static async createNewStudent(req, res) {
        try {
            const newStudent = new student_model_1.studentModel(req.body);
            await newStudent.save();
            res.redirect("/student/list");
        }
        catch (error) {
            res.render("notfound");
        }
    }
    static async getDetailStudentPage(req, res) {
        try {
            const classrooms = await classroom_model_1.classroomModel.find();
            const student = await student_model_1.studentModel.findOne({ _id: req.params.id }).populate({
                path: "classroom",
                select: "name",
            });
            if (student) {
                res.render("detail", { student: student, classrooms: classrooms });
            }
            else {
                res.render("notfound");
            }
        }
        catch (error) {
            res.render("notfound");
        }
    }
    static async getListStudentsPage(req, res) {
        try {
            let query = {};
            if (req.body.classroom) {
                query = { classroom: req.body.classroom };
            }
            let classrooms = await classroom_model_1.classroomModel.find();
            const students = await student_model_1.studentModel.find(query).populate({
                path: "classroom",
                select: "name",
            }).sort({ pointLT: 1 });
            res.render('list', { students: students, classrooms: classrooms });
        }
        catch (error) {
            res.render("notfound");
        }
    }
    static async getUpdateStudentPage(req, res) {
        try {
            const classrooms = await classroom_model_1.classroomModel.find();
            const studentNeedToUpdate = await student_model_1.studentModel.findOne({ _id: req.params.id }).populate({
                path: "classroom",
                select: "name",
            });
            if (studentNeedToUpdate) {
                res.render("update", { student: studentNeedToUpdate, classrooms: classrooms });
            }
            else
                res.render("notfound");
        }
        catch (error) {
            res.render("notfound");
        }
    }
    static async updateStudent(req, res) {
        try {
            const { name, classroom, pointLT, pointTH, description, evaluated } = req.body;
            const studentNeedToUpdate = await student_model_1.studentModel.findOne({ _id: req.params.id });
            studentNeedToUpdate.name = name;
            studentNeedToUpdate.classroom = classroom;
            studentNeedToUpdate.pointLT = pointLT;
            studentNeedToUpdate.pointTH = pointTH;
            studentNeedToUpdate.description = description;
            studentNeedToUpdate.evaluated = evaluated;
            studentNeedToUpdate.save();
            res.redirect("/student/list");
        }
        catch (error) {
            res.render("notfound");
        }
    }
    static async deleteStudent(req, res) {
        await student_model_1.studentModel.deleteOne({ _id: req.params.id });
        res.redirect("/student/list");
    }
}
exports.StudentControllers = StudentControllers;
//# sourceMappingURL=student.controller.js.map