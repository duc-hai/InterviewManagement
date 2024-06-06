import { Types } from 'mongoose';

export class CreateInterviewRequest {
    public state: string;
    public applicationId: Types.ObjectId;
    public interviewerId: Types.ObjectId[];
    public intervieweeId: Types.ObjectId;
    public interviewSchedule: Date;
}