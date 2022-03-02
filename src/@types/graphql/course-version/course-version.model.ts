import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { User } from '../user/user.model';
import { FormationSession } from '../formation-session/formation-session.model';
import { Course } from '../course/course.model';
import { HideField } from '@nestjs/graphql';
import { CourseVersionSupportSource } from '../course-version-support-source/course-version-support-source.model';
import { CourseVersionCount } from '../course/course-version-count.output';

@ObjectType()
export class CourseVersion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false,defaultValue:1})
    versionNumber!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @Field(() => User, {nullable:false})
    validatedBy?: User;

    @Field(() => String, {nullable:false})
    validatedByID!: string;

    @Field(() => Date, {nullable:true})
    validatedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    duration!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [FormationSession], {nullable:true})
    formationSessions?: Array<FormationSession>;

    @HideField()
    course?: Course;

    @HideField()
    courseID!: string;

    @Field(() => [CourseVersionSupportSource], {nullable:true})
    supports?: Array<CourseVersionSupportSource>;

    @Field(() => CourseVersionCount, {nullable:false})
    _count?: CourseVersionCount;
}
