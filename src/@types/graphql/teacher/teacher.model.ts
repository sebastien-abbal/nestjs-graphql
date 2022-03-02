import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HideField } from '@nestjs/graphql';
import { FormationClass } from '../formation-class/formation-class.model';
import { Course } from '../course/course.model';
import { TeacherCount } from './teacher-count.output';

@ObjectType()
export class Teacher {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isConfirmed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @HideField()
    userID!: string;

    @HideField()
    formationClasses?: Array<FormationClass>;

    @Field(() => [Course], {nullable:true})
    courses?: Array<Course>;

    @Field(() => TeacherCount, {nullable:false})
    _count?: TeacherCount;
}
