import path from 'path';

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'API Trackmania',
        version: '1.0.0',
        description: 'Documentation de l\'API trackmania',
        },
        servers: [
        {
            url: 'http://localhost:3000',
            description: 'Serveur local',
        },
        ]
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')]
}