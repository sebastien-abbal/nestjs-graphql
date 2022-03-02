import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';

@ObjectType()
export class FormationMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FormationType, {nullable:true})
    type?: keyof typeof FormationType;

    @Field(() => FormationFormat, {nullable:true})
    format?: keyof typeof FormationFormat;

    @Field(() => FormationTimeFormat, {nullable:true})
    timeFormat?: keyof typeof FormationTimeFormat;

    @Field(() => Boolean, {nullable:true})
    isEnabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    headMasterID?: string;

    @Field(() => String, {nullable:true})
    companyID?: string;
}
