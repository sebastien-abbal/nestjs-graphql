import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    password = "password",
    gender = "gender",
    locale = "locale",
    roles = "roles",
    email = "email",
    isEmailVerified = "isEmailVerified",
    phoneNumber = "phoneNumber",
    phoneIndex = "phoneIndex",
    isPhoneVerified = "isPhoneVerified",
    linkedinUrl = "linkedinUrl",
    description = "description",
    termsAcceptedAt = "termsAcceptedAt",
    bornAt = "bornAt",
    bannedAt = "bannedAt",
    lastLoginAt = "lastLoginAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
