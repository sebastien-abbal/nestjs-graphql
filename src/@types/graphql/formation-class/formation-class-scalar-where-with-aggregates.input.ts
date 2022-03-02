import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class FormationClassScalarWhereWithAggregatesInput {

    @Field(() => [FormationClassScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FormationClassScalarWhereWithAggregatesInput>;

    @Field(() => [FormationClassScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FormationClassScalarWhereWithAggregatesInput>;

    @Field(() => [FormationClassScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FormationClassScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @HideField()
    isEnabled?: BoolWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    formationID?: StringWithAggregatesFilter;
}
