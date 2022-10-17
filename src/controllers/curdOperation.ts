import { curdOperationService } from '../services/curdOperation'
import { IPayloadRequest, IParamsRequest } from '../interfaces/curdOperations'

class curdOperation {
    async addCustomers(req: IPayloadRequest) {
        try {
            return await curdOperationService.addCustomer(req.payload)
        } catch (err) {
            return err
        }
    }
    async getCustomers() {
        try {
            return await curdOperationService.getCustomers()
        } catch (err) {
            return err
        }
    }
    async getCustomer(req: IParamsRequest) {
        try {
            return await curdOperationService.getCustomer(req.params.id)
        } catch (err) {
            return err
        }
    }
    async updateCustomer(req: IPayloadRequest) {
        try {
            return await curdOperationService.updateCustomer(req.payload)
        } catch (err) {
            return err
        }
    }
    async deleteCustomer(req: IParamsRequest) {
        try {
            return await curdOperationService.deleteCustomer(req.params.id)
        } catch (err) {
            return err
        }
    }
}

export const controller = new curdOperation()
