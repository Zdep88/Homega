import { sequelize, User, Request } from './relations.js';
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

const request = await Request.create({
    name: 'Get API Root',
    method: 'GET',
    url: '/api/',
    data: null
})

adminUser.addRequest(request.id);

console.log("Requests initialized.");
process.exit(0);