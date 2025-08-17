import {Webhook} from 'svix'

//API Controller Function to Merge Clerk User with database
//https://localhost:3000/api/user/webhook
const clerkwebhooks = async (req,res)=>{
    try {
        //create aSVIX instac
        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.header["svix-id"],
            'svix-timestamp':req.header["svix-timestamp"],
            'svix-signature':req.header["svix-signature"],
        })
        const {data,type} =req.body
        switch(type){
            case "user.created":{
                const userData={
                    clerkId:data.id,
                    email:data.email_address[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }
                await usermodel.create(userData)
                

                res.json({})
                break;
            }
            case "user.updated":{
                const userData={
                    email:data.email_address[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }
                await usermodel.findOneAndUpdate({clerkId:data.id},userData)

                res.json({})

                break;
            }
            case "user.deleted":{
                await usermodel.findOneAndUpdate({ clerkId:data.id});
                res.json({})
                break;
            }
            default:
                break;
        }
        } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
        
    }
}
export {clerkwebhooks}