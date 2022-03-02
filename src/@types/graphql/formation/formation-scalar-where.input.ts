import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumFormationTypeFilter } from '../prisma/enum-formation-type-filter.input';
import { EnumFormationFormatFilter } from '../prisma/enum-formation-format-filter.input';
import { EnumFormationTimeFormatFilter } from '../prisma/enum-formation-time-format-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FormationScalarWhereInput {

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    AND?: Array<FormationScalarWhereInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    OR?: Array<FormationScalarWhereInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    NOT?: Array<FormationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumFormationTypeFilter, {nullable:true})
    type?: EnumFormationTypeFilter;

    @Field(() => EnumFormationFormatFilter, {nullable:true})
    format?: EnumFormationFormatFilter;

    @Field(() => EnumFormationTimeFormatFilter, {nullable:true})
    timeFormat?: EnumFormationTimeFormatFilter;

    @HideField()
    isEnabled?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    headMasterID?: StringNullableFilter;

    @HideField()
    companyID?: StringNullableFilter;
}
