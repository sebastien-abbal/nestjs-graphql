import { registerEnumType } from '@nestjs/graphql';

export enum TrackScalarFieldEnum {
    id = "id",
    name = "name",
    isEnabled = "isEnabled",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(TrackScalarFieldEnum, { name: 'TrackScalarFieldEnum', description: undefined })
