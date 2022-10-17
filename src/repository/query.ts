import { IPayload } from '../interfaces/curdOperations';

class Queries {
	async addQuery(payload: IPayload): Promise<string> {
		return `insert into customer values (${payload.id},'${payload.name}',${payload.age},'${payload.email}')`;
	}

	async getquery(): Promise<string> {
		return 'select * from customer';
	}
	async getByIdQuery(id: number): Promise<string> {
		return `select * from customer where id=${id}`;
	}
	async updateQuery(payload: IPayload): Promise<string> {
		return `UPDATE customer SET name='${payload.name}',age=${payload.age},email='${payload.email}' WHERE id=${payload.id}`;
	}
	async deleteQuery(id: number): Promise<string> {
		return `delete from customer where id=${id}`;
	}
}

export const queries = new Queries();
