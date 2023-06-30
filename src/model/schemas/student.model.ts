import {Schema, model} from "mongoose";
interface iStudent {
    name : string;
    pointLT : number;
    pointTH: number;
    description: string;
    evaluated: string;
    classroom: Object;
}
const studentSchema = new Schema <iStudent> ({
    name: String,
    pointLT: Number,
    pointTH: Number,
    description: String,
    evaluated: String,
    classroom: {type: Schema.Types.ObjectId, ref:'classroom'},
})
export const studentModel = model("student",studentSchema);