import { MY_API_TOKEN } from './config';

export const HEADER = {
    headers: new Headers({
        'X-Auth-Token': MY_API_TOKEN
    })
}