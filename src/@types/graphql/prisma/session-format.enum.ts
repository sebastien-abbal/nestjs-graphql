import { registerEnumType } from '@nestjs/graphql';

export enum SessionFormat {
    COURSE = "COURSE",
    WORKSHOP = "WORKSHOP",
    DISCUSSION = "DISCUSSION",
    CUSTOM = "CUSTOM"
}


registerEnumType(SessionFormat, { name: 'SessionFormat', description: undefined })
