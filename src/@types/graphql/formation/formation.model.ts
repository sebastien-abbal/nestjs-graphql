import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { School } from '../school/school.model';
import { FormationSession } from '../formation-session/formation-session.model';
import { FormationClass } from '../formation-class/formation-class.model';
import { User } from '../user/user.model';
import { Company } from '../company/company.model';
import { FormationCount } from './formation-count.output';

@ObjectType()
export class Formation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => FormationType, {nullable:false})
    type!: keyof typeof FormationType;

    @Field(() => FormationFormat, {nullable:false})
    format!: keyof typeof FormationFormat;

    @Field(() => FormationTimeFormat, {nullable:false})
    timeFormat!: keyof typeof FormationTimeFormat;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [School], {nullable:true})
    schools?: Array<School>;

    @Field(() => [FormationSession], {nullable:true})
    sessions?: Array<FormationSession>;

    @Field(() => FormationClass, {nullable:true})
    classes?: FormationClass | null;

    @Field(() => [User], {nullable:true})
    owners?: Array<User>;

    @Field(() => User, {nullable:true})
    headMaster?: User | null;

    @Field(() => String, {nullable:true})
    headMasterID!: string | null;

    @Field(() => Company, {nullable:true})
    company?: Company | null;

    @Field(() => String, {nullable:true})
    companyID!: string | null;

    @Field(() => FormationCount, {nullable:false})
    _count?: FormationCount;
}
