"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classroomModel = void 0;
const mongoose_1 = require("mongoose");
const classroomSchema = new mongoose_1.Schema({
    name: String,
});
exports.classroomModel = (0, mongoose_1.model)("classroom", classroomSchema);
//# sourceMappingURL=classroom.model.js.map