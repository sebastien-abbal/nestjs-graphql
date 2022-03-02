import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { SchoolCreateNestedManyWithoutFormationsInput } from '../school/school-create-nested-many-without-formations.input';
import { FormationSessionCreateNestedManyWithoutFormationInput } from '../formation-session/formation-session-create-nested-many-without-formation.input';
import { FormationClassCreateNestedOneWithoutFormationInput } from '../formation-class/formation-class-create-nested-one-without-formation.input';
import { UserCreateNestedManyWithoutFormationOwnersInput } from '../user/user-create-nested-many-without-formation-owners.input';
import { UserCreateNestedOneWithoutFormationHeadMastersInput } from '../user/user-create-nested-one-without-formation-head-masters.input';
import { CompanyCreateNestedOneWithoutFormationsInput } from '../company/company-create-nested-one-without-formations.input';

@InputType()
export class FormationCreateInput {

    @HideField()
    id?: string;

    @Field(() => FormationType, {nullable:false})
    type!: keyof typeof FormationType;

    @Field(() => FormationFormat, {nullable:false})
    format!: keyof typeof FormationFormat;

    @Field(() => FormationTimeFormat, {nullable:false})
    timeFormat!: keyof typeof FormationTimeFormat;

    @HideField()
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    schools?: SchoolCreateNestedManyWithoutFormationsInput;

    @HideField()
    sessions?: FormationSessionCreateNestedManyWithoutFormationInput;

    @HideField()
    classes?: FormationClassCreateNestedOneWithoutFormationInput;

    @HideField()
    owners?: UserCreateNestedManyWithoutFormationOwnersInput;

    @HideField()
    headMaster?: UserCreateNestedOneWithoutFormationHeadMastersInput;

    @HideField()
    company?: CompanyCreateNestedOneWithoutFormationsInput;
}
