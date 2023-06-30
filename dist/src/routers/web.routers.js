"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webRouters = void 0;
const express_1 = require("express");
const student_controller_1 = require("../controller/student.controller");
exports.webRouters = (0, express_1.Router)();
exports.webRouters.get("/create", student_controller_1.StudentControllers.getCreateNewStudentPage);
exports.webRouters.post("/create", student_controller_1.StudentControllers.createNewStudent);
exports.webRouters.get("/list", student_controller_1.StudentControllers.getListStudentsPage);
exports.webRouters.get("/list", student_controller_1.StudentControllers.getListStudentsPage);
exports.webRouters.get("/:id/detail/", student_controller_1.StudentControllers.getDetailStudentPage);
exports.webRouters.get("/:id/update/", student_controller_1.StudentControllers.getUpdateStudentPage);
exports.webRouters.post("/:id/update/", student_controller_1.StudentControllers.updateStudent);
exports.webRouters.get("/:id/delete/", student_controller_1.StudentControllers.deleteStudent);
//# sourceMappingURL=web.routers.js.map