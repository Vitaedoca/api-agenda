import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "../controller/createUserController";
import { request } from "http";

export async function usersRoutes(app: FastifyInstance) {

    app.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().create(request, reply);
    })

    app.get("/:user_id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().listUser(request, reply);
    })

    app.get("/", async () => {
        return new CreateUserController().list();
    })

    app.delete("/:user_id", async( request: FastifyRequest) => {
        return new  CreateUserController().deleteUser(request);
    })

}