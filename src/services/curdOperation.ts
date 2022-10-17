import { IPayload } from '../interfaces/curdOperations';
import { curdOperation } from '../repository/curdOperation';

class operation {
	async addCustomer(payload: IPayload) {
		return await curdOperation.addCustomer(payload);
	}
	async getCustomers() {
		return await curdOperation.getCustomers();
	}
	async getCustomer(id: number) {
		return curdOperation.getCustomer(id);
	}
	async updateCustomer(payload: IPayload) {
		return curdOperation.updateCustomer(payload);
	}
	async deleteCustomer(id: number) {
		return curdOperation.deleteCustomer(id);
	}
}

export const curdOperationService = new operation();
