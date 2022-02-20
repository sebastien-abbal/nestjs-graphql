import { registerEnumType } from '@nestjs/graphql';

export enum UserGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
    UNDEFINED = "UNDEFINED"
}


registerEnumType(UserGender, { name: 'UserGender', description: undefined })
