import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMediaProviderFilter } from '../prisma/enum-media-provider-filter.input';
import { EnumMediaStatusFilter } from '../prisma/enum-media-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserAvatarPictureScalarWhereInput {

    @Field(() => [UserAvatarPictureScalarWhereInput], {nullable:true})
    AND?: Array<UserAvatarPictureScalarWhereInput>;

    @Field(() => [UserAvatarPictureScalarWhereInput], {nullable:true})
    OR?: Array<UserAvatarPictureScalarWhereInput>;

    @Field(() => [UserAvatarPictureScalarWhereInput], {nullable:true})
    NOT?: Array<UserAvatarPictureScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumMediaProviderFilter, {nullable:true})
    provider?: EnumMediaProviderFilter;

    @Field(() => EnumMediaStatusFilter, {nullable:true})
    status?: EnumMediaStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    size?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    fileToDeleteAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userID?: StringFilter;
}
