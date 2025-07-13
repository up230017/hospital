const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DE2-API',
      version: '1.0.0',
      description: 'API documentation for the Desarma2 application',
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'https',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./API/entities/**/*.js', //toma todo los archivos dentro de la carpeta entities
          '!./API/entities/indexRoutes.js' //omite el archivo indexRoutes
  ], 
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;