import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherCreateWithoutFormationClassesInput } from './teacher-create-without-formation-classes.input';
import { TeacherCreateOrConnectWithoutFormationClassesInput } from './teacher-create-or-connect-without-formation-classes.input';
import { TeacherUpsertWithWhereUniqueWithoutFormationClassesInput } from './teacher-upsert-with-where-unique-without-formation-classes.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherUpdateWithWhereUniqueWithoutFormationClassesInput } from './teacher-update-with-where-unique-without-formation-classes.input';
import { TeacherUpdateManyWithWhereWithoutFormationClassesInput } from './teacher-update-many-with-where-without-formation-classes.input';
import { TeacherScalarWhereInput } from './teacher-scalar-where.input';

@InputType()
export class TeacherUncheckedUpdateManyWithoutFormationClassesInput {

    @Field(() => [TeacherCreateWithoutFormationClassesInput], {nullable:true})
    create?: Array<TeacherCreateWithoutFormationClassesInput>;

    @Field(() => [TeacherCreateOrConnectWithoutFormationClassesInput], {nullable:true})
    connectOrCreate?: Array<TeacherCreateOrConnectWithoutFormationClassesInput>;

    @Field(() => [TeacherUpsertWithWhereUniqueWithoutFormationClassesInput], {nullable:true})
    upsert?: Array<TeacherUpsertWithWhereUniqueWithoutFormationClassesInput>;

    @Field(() => [TeacherWhereUniqueInput], {nullable:true})
    set?: Array<TeacherWhereUniqueInput>;

    @Field(() => [TeacherWhereUniqueInput], {nullable:true})
    disconnect?: Array<TeacherWhereUniqueInput>;

    @Field(() => [TeacherWhereUniqueInput], {nullable:true})
    delete?: Array<TeacherWhereUniqueInput>;

    @Field(() => [TeacherWhereUniqueInput], {nullable:true})
    connect?: Array<TeacherWhereUniqueInput>;

    @Field(() => [TeacherUpdateWithWhereUniqueWithoutFormationClassesInput], {nullable:true})
    update?: Array<TeacherUpdateWithWhereUniqueWithoutFormationClassesInput>;

    @Field(() => [TeacherUpdateManyWithWhereWithoutFormationClassesInput], {nullable:true})
    updateMany?: Array<TeacherUpdateManyWithWhereWithoutFormationClassesInput>;

    @Field(() => [TeacherScalarWhereInput], {nullable:true})
    deleteMany?: Array<TeacherScalarWhereInput>;
}
