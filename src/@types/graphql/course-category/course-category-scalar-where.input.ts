import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class CourseCategoryScalarWhereInput {

    @Field(() => [CourseCategoryScalarWhereInput], {nullable:true})
    AND?: Array<CourseCategoryScalarWhereInput>;

    @Field(() => [CourseCategoryScalarWhereInput], {nullable:true})
    OR?: Array<CourseCategoryScalarWhereInput>;

    @Field(() => [CourseCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CourseCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;
}
