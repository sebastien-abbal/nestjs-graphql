import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMediaProviderWithAggregatesFilter } from '../prisma/enum-media-provider-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumMediaStatusWithAggregatesFilter } from '../prisma/enum-media-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserAvatarPictureScalarWhereWithAggregatesInput {

    @Field(() => [UserAvatarPictureScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserAvatarPictureScalarWhereWithAggregatesInput>;

    @Field(() => [UserAvatarPictureScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserAvatarPictureScalarWhereWithAggregatesInput>;

    @Field(() => [UserAvatarPictureScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserAvatarPictureScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    provider?: EnumMediaProviderWithAggregatesFilter;

    @HideField()
    status?: EnumMediaStatusWithAggregatesFilter;

    @HideField()
    size?: IntNullableWithAggregatesFilter;

    @HideField()
    width?: IntNullableWithAggregatesFilter;

    @HideField()
    height?: IntNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    fileToDeleteAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    userID?: StringWithAggregatesFilter;
}
