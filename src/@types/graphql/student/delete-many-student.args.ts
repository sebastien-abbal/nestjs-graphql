import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';

@ArgsType()
export class DeleteManyStudentArgs {

    @Field(() => StudentWhereInput, {nullable:true})
    where?: StudentWhereInput;
}
