import InterviewService from '../../Application/Features/Interview/InterviewService';
import { CreateInterviewRequest } from '../../Application/Features/Interview/Requests/CreateInterviewRequests';
import { Request, Response } from 'express';
import IInterviewService from '../../Application/Persistences/IServices/IInterviewService';
import { GetInterviewByIdResquest } from '../../Application/Features/Interview/Requests/GetInterviewByIdResquest';
import { UpdateInterviewRequest } from '../../Application/Features/Interview/Requests/UpdateInterviewRequest';
import { DeleteInterviewRequest } from '../../Application/Features/Interview/Requests/DeleteInterviewRequest';

export default class InterviewController {
    private readonly interviewService: IInterviewService = new InterviewService();
    // constructor(private interviewService: InterviewService) {}

    createInterview = async (req: Request<any, any, CreateInterviewRequest>, res: Response): Promise<Response> => {
        try {
            const { state, applicationId, interviewerId, intervieweeId, interviewSchedule } = req.body;
            const interviewData = {
                state: state,
                applicationId: applicationId,
                interviewerId: interviewerId,
                intervieweeId: intervieweeId,
                interviewSchedule: interviewSchedule
            }

            const result: any = await this.interviewService.createInterview(interviewData);

            if (result.error != undefined || result.error) {
                return res.status(result.statusCode).json({ error: result.error });
            }

            return res.status(result.statusCode).json(result);;
        } catch (error: any) {
            console.log('Erorr in interviewcontroller');
            return res.status(500).json({ error: error.messgae });
        }
    };

    findInterviewById = async (req: Request<any, any, GetInterviewByIdResquest>, res: Response): Promise<void> => {
        try {
            const { interviewId } = req.params;

            const result: any = await this.interviewService.findInterviewById(interviewId);

            res.status(result.statusCode).json({ data: result });

            if (result.error != undefined || result.error) {
                res.status(result.statusCode).json({ error: result.error });
            }
        } catch (error: any) {
            console.log('Erorr in interviewcontroller');
            res.status(500).json({ error: error.messgae });
        }
    };

    updateInterview = async (req: Request<any, any, UpdateInterviewRequest>, res: Response): Promise<any> => {
        try {
            const { interviewId } = req.params;
            const { state, applicationId, interviewerId, intervieweeId, interviewSchedule, interviewContent, interviewResult } = req.body;
            
            const data = {
                state: state,
                applicationId: applicationId,
                interviewerId: interviewerId,
                intervieweeId: intervieweeId,
                interviewSchedule: interviewSchedule,
                interviewContent: interviewContent,
                interviewResult: interviewResult
            };
            const interviewData = JSON.parse(JSON.stringify(data));

            const result: any = await this.interviewService.updateInterview(interviewId, interviewData);

            if (result.error != undefined || result.error) {
                return res.status(result.statusCode).json({ error: result.error });
            }

            return res.status(result.statusCode).json(result);;
        } catch (error: any) {
            console.log('Erorr in interviewcontroller');
            return res.status(500).json({ error: error.messgae });
        }
    }

    deleteInterview = async (req: Request<any, any, DeleteInterviewRequest>, res: Response): Promise<any> => {
        try {
            const { interviewId } = req.params;

            const result: any = await this.interviewService.deleteInterview(interviewId);

            res.status(result.statusCode).json({ data: result });

            if (result.error != undefined || result.error) {
                res.status(result.statusCode).json({ error: result.error });
            }
        } catch (error: any) {
            console.log('Erorr in interviewcontroller');
            return res.status(500).json({ error: error.messgae });
        }
    }
}