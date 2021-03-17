import { HOST } from "../consts/consts";

export default class BaseService {
    _apiBaseServer = HOST;
    _auth = `Bearer ${localStorage.getItem('token')}`
}