import { FastifyRequest, FastifyReply } from "fastify";
import { createUserService } from "../services/createUserService";
import { UserType } from "@prisma/client";

class CreateUserController {
    async create(request: FastifyRequest, reply: FastifyReply) {
        
        
        const { username, email, password, userType } = request.body as {
            username: string, 
            email: string, 
            password: string, 
            userType: string
        };
        
        const userTypeEnum: UserType = userType as UserType;
        
        const userService = new createUserService();
        
        const user = await userService.create({ username, email, password, userType: userTypeEnum });
        
        reply.send(user);
    }
    
    async listUser(request: FastifyRequest, reply: FastifyReply) {
        const { user_id } = request.params as { user_id: string}
        
        const listUser = new  createUserService();
        
        const list = listUser.listUser( user_id ) ;

        return reply.send(list);
    }
    
    async list() {
        
        const listUsers = new createUserService();
        
        const lists = listUsers.list();

        return (lists);
    }

    // async update(request: FastifyRequest, reply: FastifyReply) {

    //     const { username, email, password } = request.params as { 
    //         username: string, 
    //         email: string, 
    //         password: string, 
    //         userType: string
    //      }

    //      const userTypeEnum: UserType = userType as UserType;
        
    //     const updateUser = new createUserService();

    //     const user = updateUser.updateUser({ username, email, password, userType: userTypeEnum })

    //     return user;
    // }

    async deleteUser(request: FastifyRequest) {
        const { user_id } = request.params as  { user_id: string };

        const user = new createUserService();

        const  deleteUser = user.deleteUser(user_id);

        return deleteUser;
    }

}

export { CreateUserController };
