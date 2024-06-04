import IUserService from "../../Persistences/IServices/IUserService";
import IUserRepository from "../../Persistences/IRepositories/IUserRepository";
import UserRepository from "../../../Infrastructure/Persistences/Respositories/UserRepository";
import { LoginResponse } from "./Response/LoginResponse";

export default class UserService implements IUserService {
    private userRepository: IUserRepository = new UserRepository();

    async login(data: any): Promise<LoginResponse> {
        // const result = this.userRepository.
        return new LoginResponse('success', 200, {
            accessToken: '',
            refreshToken: '',
            expireIn: ''
        });
    }
}