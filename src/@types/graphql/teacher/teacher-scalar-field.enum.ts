import { registerEnumType } from '@nestjs/graphql';

export enum TeacherScalarFieldEnum {
    id = "id",
    isConfirmed = "isConfirmed",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    userID = "userID"
}


registerEnumType(TeacherScalarFieldEnum, { name: 'TeacherScalarFieldEnum', description: undefined })
