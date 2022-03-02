import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutHeadMasterInput } from './formation-create-without-head-master.input';
import { FormationCreateOrConnectWithoutHeadMasterInput } from './formation-create-or-connect-without-head-master.input';
import { FormationUpsertWithWhereUniqueWithoutHeadMasterInput } from './formation-upsert-with-where-unique-without-head-master.input';
import { FormationCreateManyHeadMasterInputEnvelope } from './formation-create-many-head-master-input-envelope.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithWhereUniqueWithoutHeadMasterInput } from './formation-update-with-where-unique-without-head-master.input';
import { FormationUpdateManyWithWhereWithoutHeadMasterInput } from './formation-update-many-with-where-without-head-master.input';
import { FormationScalarWhereInput } from './formation-scalar-where.input';

@InputType()
export class FormationUpdateManyWithoutHeadMasterInput {

    @Field(() => [FormationCreateWithoutHeadMasterInput], {nullable:true})
    create?: Array<FormationCreateWithoutHeadMasterInput>;

    @Field(() => [FormationCreateOrConnectWithoutHeadMasterInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutHeadMasterInput>;

    @Field(() => [FormationUpsertWithWhereUniqueWithoutHeadMasterInput], {nullable:true})
    upsert?: Array<FormationUpsertWithWhereUniqueWithoutHeadMasterInput>;

    @Field(() => FormationCreateManyHeadMasterInputEnvelope, {nullable:true})
    createMany?: FormationCreateManyHeadMasterInputEnvelope;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    set?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    delete?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationUpdateWithWhereUniqueWithoutHeadMasterInput], {nullable:true})
    update?: Array<FormationUpdateWithWhereUniqueWithoutHeadMasterInput>;

    @Field(() => [FormationUpdateManyWithWhereWithoutHeadMasterInput], {nullable:true})
    updateMany?: Array<FormationUpdateManyWithWhereWithoutHeadMasterInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationScalarWhereInput>;
}
