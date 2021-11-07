import PostMessage from '../models/postMessage.js';
import User from '../models/user.js';

export const getposts = async(req, res)=>{
    try{
        //console.log("Get");
        const postMessages= await PostMessage.find();
        var i;
        
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
};
export const createPost=async (req, res)=>{
    const post=req.body;
   // console.log(post);
    const newPost=new PostMessage(post);

    try{
      //  console.log("newPost");
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}
export const deletePost=async (req, res)=>{

    ///console.log("delete");
   await PostMessage.findByIdAndDelete(req.params._id)
    .catch(err=>console.log("Naman", err));
    const postMessages=await PostMessage.find();
    res.status(201).json(postMessages);
}
export const likePlus=async (req, res)=>{
   // console.log("ReqBody:",req.body)
   // const likeCount2=postMessage1.likeCount+req.body.likeAction;
    await PostMessage.findByIdAndUpdate(req.params._id, {likers:req.body.likers, likeCount:req.body.likeCount})
    .catch(err=>console.log(err));
   // console.log(likeCount2);
    const postMessages=await PostMessage.find();
    res.status(201).json(postMessages);
}

export const updatePost=async (req, res)=>{
    console.log("POST ID:", req.params._id)
    const updatedPost= await PostMessage.findByIdAndUpdate(req.params._id, req.body, {new: true})
    .catch(err=>console.log(err));
    res.status(201).json(updatedPost);
}