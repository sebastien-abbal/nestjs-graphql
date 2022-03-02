import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolUpdateManyWithoutFormationsInput } from '../school/school-update-many-without-formations.input';
import { FormationSessionUpdateManyWithoutFormationInput } from '../formation-session/formation-session-update-many-without-formation.input';
import { FormationClassUpdateOneWithoutFormationInput } from '../formation-class/formation-class-update-one-without-formation.input';
import { UserUpdateManyWithoutFormationOwnersInput } from '../user/user-update-many-without-formation-owners.input';
import { CompanyUpdateOneWithoutFormationsInput } from '../company/company-update-one-without-formations.input';

@InputType()
export class FormationUpdateWithoutHeadMasterInput {

    @Field(() => String, {nullable:true})
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
    company?: CompanyUpdateOneWithoutFormationsInput;
}
