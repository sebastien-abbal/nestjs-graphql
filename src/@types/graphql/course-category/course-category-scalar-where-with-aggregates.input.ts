import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class CourseCategoryScalarWhereWithAggregatesInput {

    @Field(() => [CourseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [CourseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [CourseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
