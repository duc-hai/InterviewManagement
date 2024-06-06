import { Types } from 'mongoose';

export class UpdateInterviewRequest {
    public state: string;
    public applicationId: Types.ObjectId;
    public interviewerId: Types.ObjectId[];
    public intervieweeId: Types.ObjectId;
    public interviewSchedule: Date;
    public interviewContent: string;
    public interviewResult: boolean;
}