import { registerEnumType } from '@nestjs/graphql';

export enum SchoolScalarFieldEnum {
    id = "id",
    name = "name",
    isEnabled = "isEnabled",
    websiteUrl = "websiteUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(SchoolScalarFieldEnum, { name: 'SchoolScalarFieldEnum', description: undefined })
