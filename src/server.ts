import createApp from "./app";

async function startServer () {
    try {
        const app = createApp();
    
        await app.listen({ port: 3333 }).then(() => {
            console.log(`🔥 Server running at port: 3333`);
        });        
    } catch (err) {
        console.error("⛔ Error while initializing server...")
    }

}

startServer();