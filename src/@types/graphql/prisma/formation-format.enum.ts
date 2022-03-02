import { registerEnumType } from '@nestjs/graphql';

export enum FormationFormat {
    PRESENTIAL = "PRESENTIAL",
    LIVE = "LIVE",
    ELEARNING = "ELEARNING"
}


registerEnumType(FormationFormat, { name: 'FormationFormat', description: undefined })
