import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FormationClassListRelationFilter } from '../formation-class/formation-class-list-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';

@InputType()
export class TeacherWhereInput {

    @Field(() => [TeacherWhereInput], {nullable:true})
    AND?: Array<TeacherWhereInput>;

    @Field(() => [TeacherWhereInput], {nullable:true})
    OR?: Array<TeacherWhereInput>;

    @Field(() => [TeacherWhereInput], {nullable:true})
    NOT?: Array<TeacherWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    isConfirmed?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    user?: UserRelationFilter;

    @HideField()
    userID?: StringFilter;

    @HideField()
    formationClasses?: FormationClassListRelationFilter;

    @HideField()
    courses?: CourseListRelationFilter;
}
