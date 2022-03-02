import { registerEnumType } from '@nestjs/graphql';

export enum FormationClassScalarFieldEnum {
    id = "id",
    name = "name",
    isEnabled = "isEnabled",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    formationID = "formationID"
}


registerEnumType(FormationClassScalarFieldEnum, { name: 'FormationClassScalarFieldEnum', description: undefined })
