import { registerEnumType } from '@nestjs/graphql';

export enum FormationScalarFieldEnum {
    id = "id",
    type = "type",
    format = "format",
    timeFormat = "timeFormat",
    isEnabled = "isEnabled",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    headMasterID = "headMasterID",
    companyID = "companyID"
}


registerEnumType(FormationScalarFieldEnum, { name: 'FormationScalarFieldEnum', description: undefined })
