import { IUnitOfWork } from "../../../Application/Persistences/IRepositories/IUnitOfWork";
import { BaseUnitOfWork } from "./BaseUnitOfWork";
import SessionRepository from "./SessionRepository";
import UserRepository from "./UserRepository";

export class UnitOfWork extends BaseUnitOfWork implements IUnitOfWork {
    userRepository: UserRepository;
    sessionRepository: SessionRepository;
 
    constructor() {
        super();
        this.userRepository = new UserRepository();
        this.sessionRepository = new SessionRepository();
    }
}