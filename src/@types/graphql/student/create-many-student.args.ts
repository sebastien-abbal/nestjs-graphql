import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentCreateManyInput } from './student-create-many.input';

@ArgsType()
export class CreateManyStudentArgs {

    @Field(() => [StudentCreateManyInput], {nullable:false})
    data!: Array<StudentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
