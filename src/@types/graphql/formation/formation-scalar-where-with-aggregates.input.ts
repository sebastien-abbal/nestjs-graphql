import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumFormationTypeWithAggregatesFilter } from '../prisma/enum-formation-type-with-aggregates-filter.input';
import { EnumFormationFormatWithAggregatesFilter } from '../prisma/enum-formation-format-with-aggregates-filter.input';
import { EnumFormationTimeFormatWithAggregatesFilter } from '../prisma/enum-formation-time-format-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FormationScalarWhereWithAggregatesInput {

    @Field(() => [FormationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FormationScalarWhereWithAggregatesInput>;

    @Field(() => [FormationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FormationScalarWhereWithAggregatesInput>;

    @Field(() => [FormationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FormationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumFormationTypeWithAggregatesFilter, {nullable:true})
    type?: EnumFormationTypeWithAggregatesFilter;

    @Field(() => EnumFormationFormatWithAggregatesFilter, {nullable:true})
    format?: EnumFormationFormatWithAggregatesFilter;

    @Field(() => EnumFormationTimeFormatWithAggregatesFilter, {nullable:true})
    timeFormat?: EnumFormationTimeFormatWithAggregatesFilter;

    @HideField()
    isEnabled?: BoolWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    headMasterID?: StringNullableWithAggregatesFilter;

    @HideField()
    companyID?: StringNullableWithAggregatesFilter;
}
