import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutHeadMasterInput } from './formation-create-without-head-master.input';
import { FormationCreateOrConnectWithoutHeadMasterInput } from './formation-create-or-connect-without-head-master.input';
import { FormationCreateManyHeadMasterInputEnvelope } from './formation-create-many-head-master-input-envelope.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationUncheckedCreateNestedManyWithoutHeadMasterInput {

    @Field(() => [FormationCreateWithoutHeadMasterInput], {nullable:true})
    create?: Array<FormationCreateWithoutHeadMasterInput>;

    @Field(() => [FormationCreateOrConnectWithoutHeadMasterInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutHeadMasterInput>;

    @Field(() => FormationCreateManyHeadMasterInputEnvelope, {nullable:true})
    createMany?: FormationCreateManyHeadMasterInputEnvelope;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;
}
