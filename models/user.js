import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    userName:String,
    password:String
});
const User = mongoose.model('User', userSchema);
export default User;