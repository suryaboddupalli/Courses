import dotenv from 'dotenv'
dotenv.config()

export const postgresConfig = {
    user: process.env.postgresUser,
    host: process.env.host,
    database: process.env.postgresDatabase,
    password: process.env.postgresPassword,
    port: process.env.postgresPort,
}
