import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentCreateInput } from './student-create.input';
import { StudentUpdateInput } from './student-update.input';

@ArgsType()
export class UpsertOneStudentArgs {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;

    @Field(() => StudentCreateInput, {nullable:false})
    create!: StudentCreateInput;

    @Field(() => StudentUpdateInput, {nullable:false})
    update!: StudentUpdateInput;
}
