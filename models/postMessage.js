import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    title: String, 
    message: String, 
    creator: String, 
    tags:[String], 
    selectedFile: {type: String, 
        default:null},
    likeCount: {
        type:Number, 
        default:0
    }, 
    likers:[String],
    createdAt:{
        type:Date, 
        default: new Date()
    },
    userId:String
});
const postMessage = mongoose.model('PostMessage', postSchema);
export default postMessage;