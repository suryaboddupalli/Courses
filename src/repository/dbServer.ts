import pg from 'pg';
import { postgresConfig } from '../config/postgresConfig';
import { IPostgresConfig } from '../interfaces/database';

export const postgres = () => {
	return new pg.Pool(postgresConfig as IPostgresConfig);
};
