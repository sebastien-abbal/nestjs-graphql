import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SchoolScalarWhereInput {

    @Field(() => [SchoolScalarWhereInput], {nullable:true})
    AND?: Array<SchoolScalarWhereInput>;

    @Field(() => [SchoolScalarWhereInput], {nullable:true})
    OR?: Array<SchoolScalarWhereInput>;

    @Field(() => [SchoolScalarWhereInput], {nullable:true})
    NOT?: Array<SchoolScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isEnabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    websiteUrl?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;
}
