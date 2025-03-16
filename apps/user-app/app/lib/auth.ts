import db from "@repo/db/client"
import  CredentialsProvider from "next-auth/providers/credentials"

export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone:{label:"Phone number", type:"text", placeholder:"9876543210"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials:any){
                const hashedPassword=credentials.password
                const existingUser=await db.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                });
                if (existingUser){
                    const passwordValidation=(credentials.password==existingUser.password);
                    if(passwordValidation){
                        return{
                            id:existingUser.id.toString(),
                            name:existingUser.name,
                            email:existingUser.number
                        }
                    }
                    return null;
                }
                try{
                    const user= await db.user.create({
                        data:{
                            number:credentials.phone,
                            password:hashedPassword
                        }
                    });
                    return{
                        id:user.id.toString(),
                        name:user.name,
                        email:user.number
                    }
                }catch(e){
                    console.log(e)
                }
                return null;
            }
        })
    ],

    secret:process.env.JWT_SECRET||"secret",

    callbacks:{
        async session({token,session}:any){
            session.user.id=token.sub
            return session;
        }
    }
}