import { UserType } from "@prisma/client";
import { prismaClient } from "../prisma";

interface CreateUserProps {
    username: string;
    email: string;
    password: string ;
    userType: UserType;
}


class createUserService {
    async create({ username, email, password, userType }: CreateUserProps ) {
    
        const user = await prismaClient.user.create({
            data: {
                username, 
                email, 
                password, 
                userType
            }
        })
        return user;
    }
    
    async listUser (user_id: string) {

        const user = await prismaClient.user.findUnique({
            where: {
                id: user_id
            }
        })

        return user;
    }

    async list() {

        const users = await prismaClient.user.findMany();

        return users;
    }

    // async updateUser({ username, email, password }: CreateUserProps) {


    //     const  updatedUsers = await prismaClient.user.update({
    //         where: { 
    //             id: email,
    //         },
    //         data:{

    //         }
    //     })

    //     return  updatedUsers;
    // }

    async deleteUser(user_id :string) {
        
        await prismaClient.user.delete({
            where: { id: user_id}
        })

        return ("Usuário deletado com sucesso!");
    }

}

export  {createUserService};