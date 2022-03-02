import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FormationUncheckedUpdateManyWithoutFormationOwnersInput {

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
    headMasterID?: string;

    @HideField()
    companyID?: string;
}
