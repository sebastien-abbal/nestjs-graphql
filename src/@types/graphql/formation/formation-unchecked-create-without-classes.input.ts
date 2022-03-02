import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolUncheckedCreateNestedManyWithoutFormationsInput } from '../school/school-unchecked-create-nested-many-without-formations.input';
import { FormationSessionUncheckedCreateNestedManyWithoutFormationInput } from '../formation-session/formation-session-unchecked-create-nested-many-without-formation.input';
import { UserUncheckedCreateNestedManyWithoutFormationOwnersInput } from '../user/user-unchecked-create-nested-many-without-formation-owners.input';

@InputType()
export class FormationUncheckedCreateWithoutClassesInput {

    @Field(() => String, {nullable:true})
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
    schools?: SchoolUncheckedCreateNestedManyWithoutFormationsInput;

    @HideField()
    sessions?: FormationSessionUncheckedCreateNestedManyWithoutFormationInput;

    @HideField()
    owners?: UserUncheckedCreateNestedManyWithoutFormationOwnersInput;

    @HideField()
    headMasterID?: string;

    @HideField()
    companyID?: string;
}
