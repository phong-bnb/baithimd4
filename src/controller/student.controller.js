"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
var student_model_1 = require("../model/schemas/student.model");
var classroom_model_1 = require("../model/schemas/classroom.model");
var StudentControllers = /** @class */ (function () {
    function StudentControllers() {
    }
    StudentControllers.getCreateNewStudentPage = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var classrooms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, classroom_model_1.classroomModel.find()];
                    case 1:
                        classrooms = _a.sent();
                        res.render("create", { classrooms: classrooms });
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentControllers.createNewStudent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newStudent, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        newStudent = new student_model_1.studentModel(req.body);
                        if (!newStudent) return [3 /*break*/, 2];
                        return [4 /*yield*/, newStudent.save()];
                    case 1:
                        _a.sent();
                        res.redirect("/student/list");
                        return [3 /*break*/, 3];
                    case 2:
                        res.render("notfound");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        res.render("notfound");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StudentControllers.getListStudentsPage = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, classrooms, students, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        query = {};
                        if (req.body.classroom) {
                            query = { classroom: req.body.classroom };
                        }
                        return [4 /*yield*/, classroom_model_1.classroomModel.find()];
                    case 1:
                        classrooms = _a.sent();
                        return [4 /*yield*/, student_model_1.studentModel.find(query).populate({
                                path: "classroom",
                                select: "name",
                            }).sort({ pointLT: 1 })];
                    case 2:
                        students = _a.sent();
                        res.render('list', { students: students, classrooms: classrooms });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.render("notfound");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentControllers.getUpdateStudentPage = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var classrooms, studentNeedToUpdate, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, classroom_model_1.classroomModel.find()];
                    case 1:
                        classrooms = _a.sent();
                        return [4 /*yield*/, student_model_1.studentModel.findOne({ _id: req.params.id }).populate({
                                path: "classroom",
                                select: "name",
                            })];
                    case 2:
                        studentNeedToUpdate = _a.sent();
                        if (studentNeedToUpdate) {
                            res.render("update", { student: studentNeedToUpdate, classrooms: classrooms });
                        }
                        else
                            res.render("notfound");
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        res.render("notfound");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentControllers.updateStudent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, classroom, pointLT, pointPractice, description, evaluated, studentNeedToUpdate, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, classroom = _a.classroom, pointLT = _a.pointLT, pointPractice = _a.pointPractice, description = _a.description, evaluated = _a.evaluated;
                        return [4 /*yield*/, student_model_1.studentModel.findOne({ _id: req.params.id })];
                    case 1:
                        studentNeedToUpdate = _b.sent();
                        studentNeedToUpdate.name = name_1;
                        studentNeedToUpdate.classroom = classroom;
                        studentNeedToUpdate.pointLT = pointLT;
                        studentNeedToUpdate.pointPractice = pointPractice;
                        studentNeedToUpdate.description = description;
                        studentNeedToUpdate.evaluated = evaluated;
                        studentNeedToUpdate.save();
                        res.redirect("/student/list");
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        res.render("notfound");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentControllers.deleteStudent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, student_model_1.studentModel.deleteOne({ _id: req.params.id })];
                    case 1:
                        _a.sent();
                        res.redirect("/student/list");
                        return [2 /*return*/];
                }
            });
        });
    };
    return StudentControllers;
}());
exports.StudentControllers = StudentControllers;
