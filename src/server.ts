import Fastify from "fastify"
import { routes } from "./routes"

const app = Fastify({
    logger: true
});

const PORT = 3333;


const start = async () => {
    
    app.register(routes)

    try {

        app.listen({ port: PORT })
        console.log(` Server running on port ${PORT} `)

    } catch(err) {
        app.log.error(err)
        process.exit(1)
    }
}

start();