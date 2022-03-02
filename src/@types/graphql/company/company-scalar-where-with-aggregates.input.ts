import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class CompanyScalarWhereWithAggregatesInput {

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CompanyScalarWhereWithAggregatesInput>;

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CompanyScalarWhereWithAggregatesInput>;

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CompanyScalarWhereWithAggregatesInput>;

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
