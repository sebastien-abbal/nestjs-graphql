import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@ArgsType()
export class FindUniqueStudentArgs {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;
}
