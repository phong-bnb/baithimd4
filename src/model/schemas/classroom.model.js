"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classroomModel = void 0;
var mongoose_1 = require("mongoose");
var classroomSchema = new mongoose_1.Schema({
    name: String,
});
exports.classroomModel = (0, mongoose_1.model)("classroom", classroomSchema);
