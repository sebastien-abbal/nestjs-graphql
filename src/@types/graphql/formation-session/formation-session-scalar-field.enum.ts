import { registerEnumType } from '@nestjs/graphql';

export enum FormationSessionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    summaryNote = "summaryNote",
    format = "format",
    isEnabled = "isEnabled",
    startsAt = "startsAt",
    endsAt = "endsAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    formationID = "formationID",
    courseID = "courseID"
}


registerEnumType(FormationSessionScalarFieldEnum, { name: 'FormationSessionScalarFieldEnum', description: undefined })
