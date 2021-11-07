import User from '../models/user.js';

export const signIn=async (req, res)=>{
    try{
       // console.log(req.body);
        const id=req.body.id;
       // console.log(id);
       User.findOne({userName:id})
        .then(user=>{
            
            if(!user)
            {   
            const newUser=new User({userName:id, password:req.body.password});
             newUser.save()
             .then((user)=>console.log("Saved", user));
            }
            else
            {
                //console.log("User: ", user);
                if(user.password!=req.body.password)
                {
                    console.log("Wrong Password");
                    res.status(403).json(null);
                }
                else
                {
                    console.log("LOGGED IN!");
                    res.status(201).json(id);
                }
        }
        });
    }
    catch(err){
        console.log(err);
    }
}