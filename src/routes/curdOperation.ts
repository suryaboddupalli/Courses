import { controller } from '../controllers/curdOperation'

export const routes = [
    {
        method: 'POST',
        path: '/add',
        handler: controller.addCustomers,
    },
    {
        method: 'get',
        path: '/get',
        handler: controller.getCustomers,
    },
    {
        method: 'get',
        path: '/get/{id}',
        handler: controller.getCustomer,
    },
    {
        method: 'put',
        path: '/update',
        handler: controller.updateCustomer,
    },
    {
        method: 'delete',
        path: '/delete/{id}',
        handler: controller.deleteCustomer,
    },
]
