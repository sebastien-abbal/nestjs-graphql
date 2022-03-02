import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentUpdateInput } from './student-update.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@ArgsType()
export class UpdateOneStudentArgs {

    @Field(() => StudentUpdateInput, {nullable:false})
    data!: StudentUpdateInput;

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;
}
