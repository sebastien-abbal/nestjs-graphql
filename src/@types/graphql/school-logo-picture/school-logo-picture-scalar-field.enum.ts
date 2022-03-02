import { registerEnumType } from '@nestjs/graphql';

export enum SchoolLogoPictureScalarFieldEnum {
    id = "id",
    provider = "provider",
    status = "status",
    size = "size",
    width = "width",
    height = "height",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    fileToDeleteAt = "fileToDeleteAt",
    schoolID = "schoolID"
}


registerEnumType(SchoolLogoPictureScalarFieldEnum, { name: 'SchoolLogoPictureScalarFieldEnum', description: undefined })
