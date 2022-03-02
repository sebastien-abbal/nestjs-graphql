import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class StudentScalarWhereInput {

    @Field(() => [StudentScalarWhereInput], {nullable:true})
    AND?: Array<StudentScalarWhereInput>;

    @Field(() => [StudentScalarWhereInput], {nullable:true})
    OR?: Array<StudentScalarWhereInput>;

    @Field(() => [StudentScalarWhereInput], {nullable:true})
    NOT?: Array<StudentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    userID?: StringFilter;
}
