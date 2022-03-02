import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentCreateInput } from './student-create.input';

@ArgsType()
export class CreateOneStudentArgs {

    @Field(() => StudentCreateInput, {nullable:false})
    data!: StudentCreateInput;
}
