import { IPayload } from '../interfaces/curdOperations'
import { postgres } from './dbServer'
import { queries } from './query'
import { RESPONSE } from '../constants/userConstant'
const pool = postgres()

class CurdOperation {
    async addCustomer(payload: IPayload): Promise<string | null> {
        const query = await queries.addQuery(payload)
        const res = await pool.query(query)
        if (res) return RESPONSE.added
        return null
    }

    async getCustomers(): Promise<null | IPayload[]> {
        const query = await queries.getquery()
        const customer = await pool.query(query)
        console.log(customer.rows)
        if (customer) return customer.rows
        return null
    }
    async getCustomer(id: number): Promise<null | IPayload[]> {
        const query = await queries.getByIdQuery(id)
        const customerList = await pool.query(query)
        if (customerList) return customerList.rows
        return null
    }
    async updateCustomer(payload: IPayload): Promise<string | null> {
        const query = await queries.updateQuery(payload)
        const res = await pool.query(query)
        if (res) return RESPONSE.updated
        return null
    }
    async deleteCustomer(id: number): Promise<string | null> {
        const query = await queries.deleteQuery(id)
        const res = await pool.query(query)
        if (res) return RESPONSE.deleted
        return null
    }
}

export const curdOperation = new CurdOperation()
