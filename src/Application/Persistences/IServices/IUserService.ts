import { LoginResponse } from "../../Features/User/Response/LoginResponse";

export default interface IUserService {
    login(data: any): Promise<LoginResponse> ;
}