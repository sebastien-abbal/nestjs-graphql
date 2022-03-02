import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherCreateWithoutFormationClassesInput } from './teacher-create-without-formation-classes.input';

@InputType()
export class TeacherCreateOrConnectWithoutFormationClassesInput {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;

    @Field(() => TeacherCreateWithoutFormationClassesInput, {nullable:false})
    create!: TeacherCreateWithoutFormationClassesInput;
}
