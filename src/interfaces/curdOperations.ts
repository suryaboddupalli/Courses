import { Request } from '@hapi/hapi'

export interface IPayloadRequest extends Request {
    payload: {
        id: number
        name: string
        age: number
        email: string
    }
}

export interface IParamsRequest extends Request {
    params: {
        id: number
    }
}

export interface IPayload {
    id: number
    name: string
    age: number
    email: string
}
