import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";

export default class UserStore {
    constructor() {
        this.isAuth = false
        this.user = {}
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return 'ok'
        } catch (e) {
            return 'error'
        }
    }

    async registration(name, surname, email, password) {
        try {
            const response = await AuthService.registration(name, surname, email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/user/refresh', {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e)
        }
    }
}