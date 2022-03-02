import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSessionFormatFilter } from '../prisma/enum-session-format-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TeacherRelationFilter } from '../teacher/teacher-relation-filter.input';
import { CourseVersionListRelationFilter } from '../course-version/course-version-list-relation-filter.input';
import { CourseCategoryListRelationFilter } from '../course-category/course-category-list-relation-filter.input';

@InputType()
export class CourseWhereInput {

    @Field(() => [CourseWhereInput], {nullable:true})
    AND?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    OR?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    NOT?: Array<CourseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumSessionFormatFilter, {nullable:true})
    format?: EnumSessionFormatFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    teacher?: TeacherRelationFilter;

    @HideField()
    teacherID?: StringFilter;

    @HideField()
    versions?: CourseVersionListRelationFilter;

    @HideField()
    categories?: CourseCategoryListRelationFilter;
}
