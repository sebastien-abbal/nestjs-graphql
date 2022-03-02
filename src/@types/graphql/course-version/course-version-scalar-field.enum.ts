import { registerEnumType } from '@nestjs/graphql';

export enum CourseVersionScalarFieldEnum {
    id = "id",
    versionNumber = "versionNumber",
    description = "description",
    format = "format",
    validatedByID = "validatedByID",
    validatedAt = "validatedAt",
    duration = "duration",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    courseID = "courseID"
}


registerEnumType(CourseVersionScalarFieldEnum, { name: 'CourseVersionScalarFieldEnum', description: undefined })
