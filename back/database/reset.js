import { sequelize, User } from '../app/sequelize/relations.js';
import 'dotenv/config';
import argon2 from 'argon2';

await sequelize.sync({ force: true })
console.log("All models were synchronized successfully.");

const hash = await argon2.hash(process.env.ADMIN_PASSWORD);
await User.create({
    email: process.env.ADMIN_EMAIL,
    admin: true,
    hash
})
console.log("Database has been reset and admin user created.");
process.exit(0);