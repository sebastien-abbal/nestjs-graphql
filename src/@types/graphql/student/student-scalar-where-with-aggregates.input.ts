import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class StudentScalarWhereWithAggregatesInput {

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    userID?: StringWithAggregatesFilter;
}
