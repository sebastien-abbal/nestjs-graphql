import { registerEnumType } from '@nestjs/graphql';

export enum UserAvatarPictureScalarFieldEnum {
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
    userID = "userID"
}


registerEnumType(UserAvatarPictureScalarFieldEnum, { name: 'UserAvatarPictureScalarFieldEnum', description: undefined })
