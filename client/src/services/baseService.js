import { HOST } from "../consts/consts";

export default class BaseService {
    _apiBaseServer = HOST
    _auth = `Bearer ${localStorage.getItem('token')}`
    _managerEmail = "mu4a4Id4@yandex.ru"
    _dateOptions = { weekday: 'long', year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
}