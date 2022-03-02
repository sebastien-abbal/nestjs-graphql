import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutFormationClassesInput } from './teacher-create-without-formation-classes.input';
import { TeacherCreateOrConnectWithoutFormationClassesInput } from './teacher-create-or-connect-without-formation-classes.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';

@InputType()
export class TeacherUncheckedCreateNestedManyWithoutFormationClassesInput {

    @Field(() => [TeacherCreateWithoutFormationClassesInput], {nullable:true})
    create?: Array<TeacherCreateWithoutFormationClassesInput>;

    @Field(() => [TeacherCreateOrConnectWithoutFormationClassesInput], {nullable:true})
    connectOrCreate?: Array<TeacherCreateOrConnectWithoutFormationClassesInput>;

    @Field(() => [TeacherWhereUniqueInput], {nullable:true})
    connect?: Array<TeacherWhereUniqueInput>;
}
