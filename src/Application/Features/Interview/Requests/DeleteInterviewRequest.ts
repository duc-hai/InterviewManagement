export class DeleteInterviewRequest {
    public interviewId: string;

    public getRoleId(): string {
        return this.interviewId;
    }

    public setRoleId(interviewId: string): void {
        this.interviewId = interviewId;
    }
}