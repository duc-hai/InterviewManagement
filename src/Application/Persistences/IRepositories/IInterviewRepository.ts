import { ClientSession } from 'mongoose';
import { InterviewWithBase } from '../../../Domain/Entities/InterviewEntites';

interface IInterviewRepository {
    createInterview(interviewData: any, session: ClientSession): Promise<typeof InterviewWithBase>;
    findInterviewById(interviewId: string, queryData: any): Promise<typeof InterviewWithBase | null>;
    updateInterview(interviewId: string, interviewData: any, session: ClientSession): Promise<typeof InterviewWithBase>;
    deleteInterview(interviewId: string, session: ClientSession): Promise<any>;
}

export default IInterviewRepository;