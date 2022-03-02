import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherCreateManyInput } from './teacher-create-many.input';

@ArgsType()
export class CreateManyTeacherArgs {

    @Field(() => [TeacherCreateManyInput], {nullable:false})
    data!: Array<TeacherCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
