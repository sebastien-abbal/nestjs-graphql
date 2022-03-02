import { registerEnumType } from '@nestjs/graphql';

export enum CourseVersionSupportSourceScalarFieldEnum {
    id = "id",
    provider = "provider",
    status = "status",
    type = "type",
    size = "size",
    width = "width",
    height = "height",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    fileToDeleteAt = "fileToDeleteAt",
    userID = "userID",
    courseID = "courseID"
}


registerEnumType(CourseVersionSupportSourceScalarFieldEnum, { name: 'CourseVersionSupportSourceScalarFieldEnum', description: undefined })
