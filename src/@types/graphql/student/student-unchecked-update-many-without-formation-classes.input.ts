import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentCreateWithoutFormationClassesInput } from './student-create-without-formation-classes.input';
import { StudentCreateOrConnectWithoutFormationClassesInput } from './student-create-or-connect-without-formation-classes.input';
import { StudentUpsertWithWhereUniqueWithoutFormationClassesInput } from './student-upsert-with-where-unique-without-formation-classes.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentUpdateWithWhereUniqueWithoutFormationClassesInput } from './student-update-with-where-unique-without-formation-classes.input';
import { StudentUpdateManyWithWhereWithoutFormationClassesInput } from './student-update-many-with-where-without-formation-classes.input';
import { StudentScalarWhereInput } from './student-scalar-where.input';

@InputType()
export class StudentUncheckedUpdateManyWithoutFormationClassesInput {

    @Field(() => [StudentCreateWithoutFormationClassesInput], {nullable:true})
    create?: Array<StudentCreateWithoutFormationClassesInput>;

    @Field(() => [StudentCreateOrConnectWithoutFormationClassesInput], {nullable:true})
    connectOrCreate?: Array<StudentCreateOrConnectWithoutFormationClassesInput>;

    @Field(() => [StudentUpsertWithWhereUniqueWithoutFormationClassesInput], {nullable:true})
    upsert?: Array<StudentUpsertWithWhereUniqueWithoutFormationClassesInput>;

    @Field(() => [StudentWhereUniqueInput], {nullable:true})
    set?: Array<StudentWhereUniqueInput>;

    @Field(() => [StudentWhereUniqueInput], {nullable:true})
    disconnect?: Array<StudentWhereUniqueInput>;

    @Field(() => [StudentWhereUniqueInput], {nullable:true})
    delete?: Array<StudentWhereUniqueInput>;

    @Field(() => [StudentWhereUniqueInput], {nullable:true})
    connect?: Array<StudentWhereUniqueInput>;

    @Field(() => [StudentUpdateWithWhereUniqueWithoutFormationClassesInput], {nullable:true})
    update?: Array<StudentUpdateWithWhereUniqueWithoutFormationClassesInput>;

    @Field(() => [StudentUpdateManyWithWhereWithoutFormationClassesInput], {nullable:true})
    updateMany?: Array<StudentUpdateManyWithWhereWithoutFormationClassesInput>;

    @Field(() => [StudentScalarWhereInput], {nullable:true})
    deleteMany?: Array<StudentScalarWhereInput>;
}
