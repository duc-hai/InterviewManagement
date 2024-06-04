import { CreateUserRequest } from './../../Application/Features/User/Requests/CreateUserRequest';
import { Request, Response, query } from 'express';
import LoginHandler from "../../Application/Features/User/Handlers/LoginHandler";
import { LoginRequest } from "../../Application/Features/User/Requests/LoginRequest";
import { CreateUserHandler } from '../../Application/Features/User/Handlers/CreateUserHandler';
import UserRepository from '../../Infrastructure/Persistences/Respositories/UserRepository';
import UserService from '../../Application/Features/User/UserService';
import IUserService from '../../Application/Persistences/IServices/IUserService';

export default class UserController {
    private userService: IUserService = new UserService();

    login = async (req: Request<any, any, LoginRequest>, res: Response): Promise<Response> => {
        try {
            const result = await this.userService.login('testing');

            return res.status(500).json({ 
                result
            })
        }
        catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    }
}