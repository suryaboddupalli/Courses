import { curdOperation } from '../repository/curdOperation'
import { curdOperationService } from './curdOperation'

const payload = {
    id: 1,
    name: 'test',
    age: 21,
    email: 'test@gmail.com',
}

const mockCustomers = [payload]
const id = 1

describe('services', () => {
    test('addCustomer', async () => {
        const spy = jest.spyOn(curdOperation, 'addCustomer')
        spy.mockReturnValueOnce(Promise.resolve('Customer added'))
        expect(await curdOperationService.addCustomer(payload)).toBe(
            'Customer added',
        )
    })
    test('getCustomers', async () => {
        const spy = jest.spyOn(curdOperation, 'getCustomers')
        spy.mockReturnValueOnce(Promise.resolve(mockCustomers))
        expect(await curdOperationService.getCustomers()).toBe(mockCustomers)
    })
    test('getCustomer', async () => {
        const spy = jest.spyOn(curdOperation, 'getCustomer')
        spy.mockReturnValueOnce(Promise.resolve(mockCustomers))
        expect(await curdOperationService.getCustomer(id)).toBe(mockCustomers)
    })
    test('UpdateUser', async () => {
        const spy = jest.spyOn(curdOperation, 'updateCustomer')
        spy.mockReturnValueOnce(Promise.resolve('Customer updated'))
        expect(await curdOperationService.updateCustomer(payload)).toEqual(
            'Customer updated',
        )
    })
    test('Delete Customer', async () => {
        const spy = jest.spyOn(curdOperation, 'deleteCustomer')
        spy.mockReturnValueOnce(Promise.resolve('customer deleted'))
        expect(await curdOperationService.deleteCustomer(id)).toEqual(
            'customer deleted',
        )
    })
})
