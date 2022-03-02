import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FormationRelationFilter } from '../formation/formation-relation-filter.input';
import { StudentListRelationFilter } from '../student/student-list-relation-filter.input';
import { TeacherListRelationFilter } from '../teacher/teacher-list-relation-filter.input';

@InputType()
export class FormationClassWhereInput {

    @Field(() => [FormationClassWhereInput], {nullable:true})
    AND?: Array<FormationClassWhereInput>;

    @Field(() => [FormationClassWhereInput], {nullable:true})
    OR?: Array<FormationClassWhereInput>;

    @Field(() => [FormationClassWhereInput], {nullable:true})
    NOT?: Array<FormationClassWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    isEnabled?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    formation?: FormationRelationFilter;

    @HideField()
    formationID?: StringFilter;

    @HideField()
    students?: StudentListRelationFilter;

    @HideField()
    teachers?: TeacherListRelationFilter;
}
