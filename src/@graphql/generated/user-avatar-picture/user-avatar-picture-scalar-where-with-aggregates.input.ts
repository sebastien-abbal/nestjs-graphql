import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMediaProviderWithAggregatesFilter } from '../prisma/enum-media-provider-with-aggregates-filter.input';
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

    @Field(() => EnumMediaProviderWithAggregatesFilter, {nullable:true})
    provider?: EnumMediaProviderWithAggregatesFilter;

    @Field(() => EnumMediaStatusWithAggregatesFilter, {nullable:true})
    status?: EnumMediaStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    size?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    width?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    height?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    fileToDeleteAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userID?: StringWithAggregatesFilter;
}
