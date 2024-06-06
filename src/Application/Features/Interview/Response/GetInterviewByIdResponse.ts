import { Types } from 'mongoose';
import { BaseResponse } from '../../../Common/Model/Response/BaseResponse';

export class GetInterviewByIdResponse extends BaseResponse {
    private data: {
        state: string,
        applicationId: Types.ObjectId,
        interviewerId: [Types.ObjectId],
        intervieweeId: Types.ObjectId,
        interviewSchedule: Date,
        interviewContent: string,
        interviewResult: boolean
    };

    constructor(
        message: string,
        statusCode: number,
        data: {
            state: string,
            applicationId: Types.ObjectId,
            interviewerId: [Types.ObjectId],
            intervieweeId: Types.ObjectId,
            interviewSchedule: Date,
            interviewContent: string,
            interviewResult: boolean
        },
        error?: string
    ) {
        super(message, statusCode, data, error);
        this.data = {
            state: data.state,
            applicationId: data.applicationId,
            interviewerId: data.interviewerId,
            intervieweeId: data.intervieweeId,
            interviewSchedule: data.interviewSchedule,
            interviewContent: data.interviewContent,
            interviewResult: data.interviewResult
        }
    }
}