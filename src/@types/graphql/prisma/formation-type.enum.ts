import { registerEnumType } from '@nestjs/graphql';

export enum FormationType {
    B2B = "B2B",
    B2C = "B2C"
}


registerEnumType(FormationType, { name: 'FormationType', description: undefined })
