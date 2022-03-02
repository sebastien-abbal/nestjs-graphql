import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherUpdateWithoutFormationClassesInput } from './teacher-update-without-formation-classes.input';

@InputType()
export class TeacherUpdateWithWhereUniqueWithoutFormationClassesInput {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;

    @Field(() => TeacherUpdateWithoutFormationClassesInput, {nullable:false})
    data!: TeacherUpdateWithoutFormationClassesInput;
}
