import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ThinkificItemScalarWhereWithAggregatesInput {

    @Field(() => [ThinkificItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ThinkificItemScalarWhereWithAggregatesInput>;

    @Field(() => [ThinkificItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ThinkificItemScalarWhereWithAggregatesInput>;

    @Field(() => [ThinkificItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ThinkificItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thinkificID?: StringWithAggregatesFilter;

    @HideField()
    createdByID?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    sessionID?: StringWithAggregatesFilter;
}
