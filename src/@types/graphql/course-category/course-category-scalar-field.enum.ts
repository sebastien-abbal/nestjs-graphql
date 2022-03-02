import { registerEnumType } from '@nestjs/graphql';

export enum CourseCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(CourseCategoryScalarFieldEnum, { name: 'CourseCategoryScalarFieldEnum', description: undefined })
