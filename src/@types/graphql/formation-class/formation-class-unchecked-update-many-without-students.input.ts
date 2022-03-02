import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutStudentsInput } from './formation-class-create-without-students.input';
import { FormationClassCreateOrConnectWithoutStudentsInput } from './formation-class-create-or-connect-without-students.input';
import { FormationClassUpsertWithWhereUniqueWithoutStudentsInput } from './formation-class-upsert-with-where-unique-without-students.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithWhereUniqueWithoutStudentsInput } from './formation-class-update-with-where-unique-without-students.input';
import { FormationClassUpdateManyWithWhereWithoutStudentsInput } from './formation-class-update-many-with-where-without-students.input';
import { FormationClassScalarWhereInput } from './formation-class-scalar-where.input';

@InputType()
export class FormationClassUncheckedUpdateManyWithoutStudentsInput {

    @Field(() => [FormationClassCreateWithoutStudentsInput], {nullable:true})
    create?: Array<FormationClassCreateWithoutStudentsInput>;

    @Field(() => [FormationClassCreateOrConnectWithoutStudentsInput], {nullable:true})
    connectOrCreate?: Array<FormationClassCreateOrConnectWithoutStudentsInput>;

    @Field(() => [FormationClassUpsertWithWhereUniqueWithoutStudentsInput], {nullable:true})
    upsert?: Array<FormationClassUpsertWithWhereUniqueWithoutStudentsInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    set?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    delete?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    connect?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassUpdateWithWhereUniqueWithoutStudentsInput], {nullable:true})
    update?: Array<FormationClassUpdateWithWhereUniqueWithoutStudentsInput>;

    @Field(() => [FormationClassUpdateManyWithWhereWithoutStudentsInput], {nullable:true})
    updateMany?: Array<FormationClassUpdateManyWithWhereWithoutStudentsInput>;

    @Field(() => [FormationClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationClassScalarWhereInput>;
}
