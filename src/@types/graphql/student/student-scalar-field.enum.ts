import { registerEnumType } from '@nestjs/graphql';

export enum StudentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    userID = "userID"
}


registerEnumType(StudentScalarFieldEnum, { name: 'StudentScalarFieldEnum', description: undefined })
