import {Router} from 'express'
import { signUp, login } from '../controllers/authentication'

export default (router: Router) => {
    router.post('/auth/signup', signUp)
            .post('/auth/login', login)
}