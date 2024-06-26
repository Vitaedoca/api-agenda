import { FastifyInstance } from "fastify";
import { usersRoutes } from "./users.routes";


export async function routes(app: FastifyInstance) {

    app.register(usersRoutes, { prefix: 'users'});
}

