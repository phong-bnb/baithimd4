import {Router} from "express";
import {StudentControllers} from "../controller/student.controller";

export const webRouters = Router();

webRouters.get("/create",StudentControllers.getCreateNewStudentPage);
webRouters.post("/create",StudentControllers.createNewStudent);
webRouters.get("/list",StudentControllers.getListStudentsPage);
webRouters.get("/list",StudentControllers.getListStudentsPage);
webRouters.get("/:id/detail/",StudentControllers.getDetailStudentPage);
webRouters.get("/:id/update/",StudentControllers.getUpdateStudentPage);
webRouters.post("/:id/update/",StudentControllers.updateStudent);
webRouters.get("/:id/delete/",StudentControllers.deleteStudent);
