import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class TeacherScalarWhereWithAggregatesInput {

    @Field(() => [TeacherScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TeacherScalarWhereWithAggregatesInput>;

    @Field(() => [TeacherScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TeacherScalarWhereWithAggregatesInput>;

    @Field(() => [TeacherScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TeacherScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    isConfirmed?: BoolWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    userID?: StringWithAggregatesFilter;
}
