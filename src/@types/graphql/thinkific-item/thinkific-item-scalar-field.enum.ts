import { registerEnumType } from '@nestjs/graphql';

export enum ThinkificItemScalarFieldEnum {
    thinkificID = "thinkificID",
    createdByID = "createdByID",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    sessionID = "sessionID"
}


registerEnumType(ThinkificItemScalarFieldEnum, { name: 'ThinkificItemScalarFieldEnum', description: undefined })
