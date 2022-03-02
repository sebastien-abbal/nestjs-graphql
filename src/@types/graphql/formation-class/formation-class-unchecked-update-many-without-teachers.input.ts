import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutTeachersInput } from './formation-class-create-without-teachers.input';
import { FormationClassCreateOrConnectWithoutTeachersInput } from './formation-class-create-or-connect-without-teachers.input';
import { FormationClassUpsertWithWhereUniqueWithoutTeachersInput } from './formation-class-upsert-with-where-unique-without-teachers.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithWhereUniqueWithoutTeachersInput } from './formation-class-update-with-where-unique-without-teachers.input';
import { FormationClassUpdateManyWithWhereWithoutTeachersInput } from './formation-class-update-many-with-where-without-teachers.input';
import { FormationClassScalarWhereInput } from './formation-class-scalar-where.input';

@InputType()
export class FormationClassUncheckedUpdateManyWithoutTeachersInput {

    @Field(() => [FormationClassCreateWithoutTeachersInput], {nullable:true})
    create?: Array<FormationClassCreateWithoutTeachersInput>;

    @Field(() => [FormationClassCreateOrConnectWithoutTeachersInput], {nullable:true})
    connectOrCreate?: Array<FormationClassCreateOrConnectWithoutTeachersInput>;

    @Field(() => [FormationClassUpsertWithWhereUniqueWithoutTeachersInput], {nullable:true})
    upsert?: Array<FormationClassUpsertWithWhereUniqueWithoutTeachersInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    set?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    delete?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    connect?: Array<FormationClassWhereUniqueInput>;

    @Field(() => [FormationClassUpdateWithWhereUniqueWithoutTeachersInput], {nullable:true})
    update?: Array<FormationClassUpdateWithWhereUniqueWithoutTeachersInput>;

    @Field(() => [FormationClassUpdateManyWithWhereWithoutTeachersInput], {nullable:true})
    updateMany?: Array<FormationClassUpdateManyWithWhereWithoutTeachersInput>;

    @Field(() => [FormationClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationClassScalarWhereInput>;
}
