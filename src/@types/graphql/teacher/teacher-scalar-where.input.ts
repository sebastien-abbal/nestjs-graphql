import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class TeacherScalarWhereInput {

    @Field(() => [TeacherScalarWhereInput], {nullable:true})
    AND?: Array<TeacherScalarWhereInput>;

    @Field(() => [TeacherScalarWhereInput], {nullable:true})
    OR?: Array<TeacherScalarWhereInput>;

    @Field(() => [TeacherScalarWhereInput], {nullable:true})
    NOT?: Array<TeacherScalarWhereInput>;

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
    userID?: StringFilter;
}
