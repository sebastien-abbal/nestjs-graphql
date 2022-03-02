import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FormationClassListRelationFilter } from '../formation-class/formation-class-list-relation-filter.input';

@InputType()
export class StudentWhereInput {

    @Field(() => [StudentWhereInput], {nullable:true})
    AND?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    OR?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    NOT?: Array<StudentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
