import IInterviewService from '../../Persistences/IServices/IInterviewService';
import { IUnitOfWork } from '../../Persistences/IRepositories/IUnitOfWork';
import { UnitOfWork } from '../../../Infrastructure/Persistences/Respositories/UnitOfWork';
import { CoreException } from '../../Common/Exceptions/CoreException';
import { StatusCodeEnums } from '../../../Domain/Enums/StatusCodeEnums';
import { CreateInterviewResponse } from './Response/CreateInterviewResponse';
import { GetInterviewByIdResponse } from './Response/GetInterviewByIdResponse';
import { UpdateInterviewResponse } from './Response/UpdateInterviewResponse';
import { DeleteInterviewResponse } from './Response/DeleteInterviewResponse';

export default class InterviewService implements IInterviewService {
    // state: string, applicationId: string, interviewerId: string[], intervieweeId: string, interviewSchedule: Date
    async createInterview(interviewData: any): Promise<any> {
        const unitOfWork: IUnitOfWork = new UnitOfWork();

        try {
            const session = await unitOfWork.startTransaction();

            const result = await unitOfWork.interviewRepository.createInterview(interviewData, session);

            await unitOfWork.commitTransaction();

            return new CreateInterviewResponse('Successful', StatusCodeEnums.OK_200, result);
        } catch (error: any) {
            console.log('Erorr in interviewservice');
            await unitOfWork.abortTransaction();
            return new CoreException(StatusCodeEnums.InternalServerError_500, error.mesagge);
        }
    }

    async findInterviewById(interviewId: string): Promise<any> {
        const unitOfWork: IUnitOfWork = new UnitOfWork();

        try {
            await unitOfWork.startTransaction();

            const queryData: any = {
                isActive: true,
                isDelete: false,
            }

            const result: any = await unitOfWork.interviewRepository.findInterviewById(interviewId, queryData);
            if (result == null) throw new Error('Can not find this interview');

            return new GetInterviewByIdResponse('Successful', StatusCodeEnums.OK_200, result);
        } catch (error: any) {
            console.log('Erorr in interviewservice');
            await unitOfWork.abortTransaction();
            return new CoreException(StatusCodeEnums.InternalServerError_500, error.mesagge);
        }
    }

    async updateInterview(interviewId: string, interviewData: any): Promise<any> {
        const unitOfWork: IUnitOfWork = new UnitOfWork();

        try {
            const session = await unitOfWork.startTransaction();

            const interview = this.findInterviewById(interviewId);
            if (!interview) return new CoreException(StatusCodeEnums.InternalServerError_500, "Interview not found!");

            const result: any = await unitOfWork.interviewRepository.updateInterview(interviewId, interviewData, session);

            await unitOfWork.commitTransaction();

            return new UpdateInterviewResponse('Successful', StatusCodeEnums.OK_200, result);
        } catch (error: any) {
            console.log('Erorr in interviewservice');
            await unitOfWork.abortTransaction();
            return new CoreException(StatusCodeEnums.InternalServerError_500, error.mesagge);
        }
    }

    async deleteInterview(interviewId: string): Promise<any> {
        const unitOfWork: IUnitOfWork = new UnitOfWork();

        try {
            const session = await unitOfWork.startTransaction();

            const interview = this.findInterviewById(interviewId);
            if (!interview) return new CoreException(StatusCodeEnums.InternalServerError_500, "Interview not found!");

            const result: any = await unitOfWork.interviewRepository.deleteInterview(interviewId, session);

            await unitOfWork.commitTransaction();

            return new DeleteInterviewResponse('Successful', StatusCodeEnums.OK_200, result);
        } catch (error: any) {
            console.log('Erorr in interviewservice');
            await unitOfWork.abortTransaction();
            return new CoreException(StatusCodeEnums.InternalServerError_500, error.mesagge);
        }
    }
}