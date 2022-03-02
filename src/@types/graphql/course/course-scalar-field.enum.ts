import { registerEnumType } from '@nestjs/graphql';

export enum CourseScalarFieldEnum {
    id = "id",
    title = "title",
    format = "format",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    teacherID = "teacherID"
}


registerEnumType(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined })
