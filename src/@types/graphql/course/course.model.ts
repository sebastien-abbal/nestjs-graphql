import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { Teacher } from '../teacher/teacher.model';
import { CourseVersion } from '../course-version/course-version.model';
import { CourseCategory } from '../course-category/course-category.model';
import { CourseCount } from './course-count.output';

@ObjectType()
export class Course {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Teacher, {nullable:false})
    teacher?: Teacher;

    @Field(() => String, {nullable:false})
    teacherID!: string;

    @Field(() => [CourseVersion], {nullable:true})
    versions?: Array<CourseVersion>;

    @Field(() => [CourseCategory], {nullable:true})
    categories?: Array<CourseCategory>;

    @Field(() => CourseCount, {nullable:false})
    _count?: CourseCount;
}
