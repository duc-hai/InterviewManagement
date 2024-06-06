import { CreateInterviewResponse } from '../../Features/Interview/Response/CreateInterviewResponse';
import { GetInterviewByIdResponse } from '../../Features/Interview/Response/GetInterviewByIdResponse';
import { UpdateInterviewResponse } from '../../Features/Interview/Response/UpdateInterviewResponse';

export default interface IInterviewService {
    createInterview(interviewData: any): Promise<CreateInterviewResponse>;
    findInterviewById(interviewId: string): Promise<GetInterviewByIdResponse>;
    updateInterview(interviewId: string, interviewData: any): Promise<UpdateInterviewResponse>;
    deleteInterview(interviewId: string): Promise<GetInterviewByIdResponse>;
}