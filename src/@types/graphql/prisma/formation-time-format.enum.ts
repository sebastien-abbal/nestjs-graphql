import { registerEnumType } from '@nestjs/graphql';

export enum FormationTimeFormat {
    FULL_TIME = "FULL_TIME",
    PART_TIME = "PART_TIME"
}


registerEnumType(FormationTimeFormat, { name: 'FormationTimeFormat', description: undefined })
