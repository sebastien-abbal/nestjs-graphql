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
import { SchoolListRelationFilter } from '../school/school-list-relation-filter.input';
import { FormationSessionListRelationFilter } from '../formation-session/formation-session-list-relation-filter.input';
import { FormationClassRelationFilter } from '../formation-class/formation-class-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CompanyRelationFilter } from '../company/company-relation-filter.input';

@InputType()
export class FormationWhereInput {

    @Field(() => [FormationWhereInput], {nullable:true})
    AND?: Array<FormationWhereInput>;

    @Field(() => [FormationWhereInput], {nullable:true})
    OR?: Array<FormationWhereInput>;

    @Field(() => [FormationWhereInput], {nullable:true})
    NOT?: Array<FormationWhereInput>;

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
    schools?: SchoolListRelationFilter;

    @HideField()
    sessions?: FormationSessionListRelationFilter;

    @HideField()
    classes?: FormationClassRelationFilter;

    @HideField()
    owners?: UserListRelationFilter;

    @HideField()
    headMaster?: UserRelationFilter;

    @HideField()
    headMasterID?: StringNullableFilter;

    @HideField()
    company?: CompanyRelationFilter;

    @HideField()
    companyID?: StringNullableFilter;
}
