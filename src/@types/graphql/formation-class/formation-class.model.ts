import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Formation } from '../formation/formation.model';
import { HideField } from '@nestjs/graphql';
import { Student } from '../student/student.model';
import { Teacher } from '../teacher/teacher.model';
import { FormationClassCount } from './formation-class-count.output';

@ObjectType()
export class FormationClass {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    formation?: Formation;

    @HideField()
    formationID!: string;

    @HideField()
    students?: Array<Student>;

    @HideField()
    teachers?: Array<Teacher>;

    @Field(() => FormationClassCount, {nullable:false})
    _count?: FormationClassCount;
}
