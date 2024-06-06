import { ClientSession } from 'mongoose';
import IInterviewRepository from '../../../Application/Persistences/IRepositories/IInterviewRepository';
import { InterviewWithBase } from '../../../Domain/Entities/InterviewEntites';

class InterviewRepository implements IInterviewRepository {
    async createInterview(interviewData: any, session: ClientSession): Promise<typeof InterviewWithBase> {
        try {
            const interview: any = await InterviewWithBase.create([{
                state: interviewData.state,
                applicationId: interviewData.applicationId,
                interviewerId: interviewData.interviewerId,
                intervieweeId: interviewData.intervieweeId,
                interviewSchedule: interviewData.interviewSchedule
            }], { session });

            return interview[0]
        } catch (error: any) {
            throw new Error("Error at createInterview in InterviewRepository: " + error.message);
        }
    }

    async findInterviewById(interviewId: string, queryData: any): Promise<typeof InterviewWithBase | null> {
        try {
            const query = {
                _id: interviewId,
                isActive: queryData.isActive,
                isDelete: queryData.isDelete,
            };
            const interview: typeof InterviewWithBase[] = await InterviewWithBase.find(query);

            if (interview == null) return null;
            
            return interview[0];
        } catch (error: any) {
            throw new Error("Error at findInterviewById in InterviewRepository: " + error.message);
        }
    }

    async updateInterview(interviewId: string, interviewData: any, session: ClientSession): Promise<typeof InterviewWithBase> {
        try {
            const interview: any = await InterviewWithBase.updateOne({_id: interviewId}, interviewData, { session });

            return interview[0]
        } catch (error: any) {
            throw new Error("Error at updateInterview in InterviewRepository: " + error.message);
        }
    }
    
    async deleteInterview(interviewId: string, session: ClientSession) {
        try {
            const query = {
                isActive: false,
                isDelete: true,
            };

            const interview: any = await InterviewWithBase.updateOne({_id: interviewId}, query, { session });

            return interview[0]
        } catch (error: any) {
            throw new Error("Error at updateInterview in InterviewRepository: " + error.message);
        }
    }
}

export default InterviewRepository;