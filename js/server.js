const express = require('express');
//const cors = require('cors');
const connectDB = require('./API/config/database')
//const initializeData = require('./src/config/initializeData');
const routes = require('./API/entities/indexRoutes');
const swaggerMiddleware = require('./API/middlewares/swagger');
const errorHandler = require('./API/middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3005;

async function main(){
    try{
        await connectDB();
        //await initializeData();

        swaggerMiddleware(app);
        app.use(errorHandler);

        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('Bienvenido a API de Desarma2');
        });

        app.use('/api', routes);

        app.listen(port, () => {
            console.log(`Server listening...`);
    });
    } catch (error){
        console.error('Error al iniciar la aplicación:', error);
        process.exit(1); // Salir del proceso si ocurre un error crítico
    }
}

main();