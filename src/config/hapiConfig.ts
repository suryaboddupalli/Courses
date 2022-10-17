import dotenv from 'dotenv';
dotenv.config();

export const hapiConfig = {
	port: process.env.hapiPort,
	host: process.env.host,
};
