import mongoose from 'mongoose';
import { InterviewStateEnums } from '../Enums/InterviewStateEnums';
import { BaseSchema } from './BaseEntities';

export const Interview = new mongoose.Schema({
    state: {
        type: String,
        enum: InterviewStateEnums
    },

    applicationId: {
        type: mongoose.Types.ObjectId,
        ref: 'Application'
    },

    interviewerId: [{
        type: mongoose.Types.ObjectId
    }],

    intervieweeId: {
        type: mongoose.Types.ObjectId
    },

    interviewSchedule: {
        type: Date
    },

    interviewContent: {
        type: String,
        default: ''
    },

    interviewResult: {
        type: Boolean,
        default: false
    }
});

const InterviewWithBaseSchema = new mongoose.Schema({
  ...Interview.obj,
  ...BaseSchema.obj
});

export const InterviewWithBase = mongoose.model('InterviewWithBase', InterviewWithBaseSchema, 'interviews');