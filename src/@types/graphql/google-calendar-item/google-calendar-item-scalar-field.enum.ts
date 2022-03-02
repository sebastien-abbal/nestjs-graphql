import { registerEnumType } from '@nestjs/graphql';

export enum GoogleCalendarItemScalarFieldEnum {
    googleCalendarID = "googleCalendarID",
    createdByID = "createdByID",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    sessionID = "sessionID"
}


registerEnumType(GoogleCalendarItemScalarFieldEnum, { name: 'GoogleCalendarItemScalarFieldEnum', description: undefined })
