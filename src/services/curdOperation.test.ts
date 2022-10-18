import { curdOperation } from '../repository/curdOperation'
import { curdOperationService } from './curdOperation'

const payload = {
    id: 1,
    name: 'test',
    age: 21,
    email: 'test@gmail.com',
}

describe('services', () => {
    test('addUser', async () => {
        const spy = jest.spyOn(curdOperation, 'addCustomer')
        spy.mockReturnValueOnce(Promise.resolve('user added'))
        expect(await curdOperationService.addCustomer(payload)).toBe(
            'user added',
        )
    })
})
