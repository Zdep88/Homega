import { sequelize, User, Request, Verb, UserRequest } from './relations.js';
import 'dotenv/config';
import argon2 from 'argon2';

await sequelize.sync({ force: true })
console.log("All models were synchronized successfully.");

const hash = await argon2.hash(process.env.ADMIN_PASSWORD);
const adminUser = await User.create({
    email: process.env.ADMIN_EMAIL,
    admin: true,
    hash
})
console.log("Admin user created.");

const verbs = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
for (const verbName of verbs) {
    const verb = await Verb.create({ name: verbName });
}
console.log("HTTP verbs created.");

const requests = await Request.bulkCreate([
    {
        name: 'Get API Root',
        url: '/api/',
        data: null,
        verbId: 1 // GET    
    },
    {
        name: 'Get error Sample',
        url: '/api/error',
        data: null,
        verbId: 1 // GET    
    },
    {
        name: 'Get available Requests.',
        url: '/api/requests',
        data: null,
        verbId: 1 // GET    
    }
])
console.log("Sample request created.");

for (const request of requests) {
    await UserRequest.create({
        UserId: adminUser.id,
        RequestId: request.id
    });
}
console.log("Sample user-request association created.");

process.exit(0);