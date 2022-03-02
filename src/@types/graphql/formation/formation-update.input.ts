import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { SchoolUpdateManyWithoutFormationsInput } from '../school/school-update-many-without-formations.input';
import { FormationSessionUpdateManyWithoutFormationInput } from '../formation-session/formation-session-update-many-without-formation.input';
import { FormationClassUpdateOneWithoutFormationInput } from '../formation-class/formation-class-update-one-without-formation.input';
import { UserUpdateManyWithoutFormationOwnersInput } from '../user/user-update-many-without-formation-owners.input';
import { UserUpdateOneWithoutFormationHeadMastersInput } from '../user/user-update-one-without-formation-head-masters.input';
import { CompanyUpdateOneWithoutFormationsInput } from '../company/company-update-one-without-formations.input';

@InputType()
export class FormationUpdateInput {

    @HideField()
    id?: string;

    @Field(() => FormationType, {nullable:true})
    type?: keyof typeof FormationType;

    @Field(() => FormationFormat, {nullable:true})
    format?: keyof typeof FormationFormat;

    @Field(() => FormationTimeFormat, {nullable:true})
    timeFormat?: keyof typeof FormationTimeFormat;

    @HideField()
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    schools?: SchoolUpdateManyWithoutFormationsInput;

    @HideField()
    sessions?: FormationSessionUpdateManyWithoutFormationInput;

    @HideField()
    classes?: FormationClassUpdateOneWithoutFormationInput;

    @HideField()
    owners?: UserUpdateManyWithoutFormationOwnersInput;

    @HideField()
    headMaster?: UserUpdateOneWithoutFormationHeadMastersInput;

    @HideField()
    company?: CompanyUpdateOneWithoutFormationsInput;
}
