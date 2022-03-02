import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutFormationInput } from './formation-session-create-without-formation.input';
import { FormationSessionCreateOrConnectWithoutFormationInput } from './formation-session-create-or-connect-without-formation.input';
import { FormationSessionUpsertWithWhereUniqueWithoutFormationInput } from './formation-session-upsert-with-where-unique-without-formation.input';
import { FormationSessionCreateManyFormationInputEnvelope } from './formation-session-create-many-formation-input-envelope.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithWhereUniqueWithoutFormationInput } from './formation-session-update-with-where-unique-without-formation.input';
import { FormationSessionUpdateManyWithWhereWithoutFormationInput } from './formation-session-update-many-with-where-without-formation.input';
import { FormationSessionScalarWhereInput } from './formation-session-scalar-where.input';

@InputType()
export class FormationSessionUncheckedUpdateManyWithoutFormationInput {

    @Field(() => [FormationSessionCreateWithoutFormationInput], {nullable:true})
    create?: Array<FormationSessionCreateWithoutFormationInput>;

    @Field(() => [FormationSessionCreateOrConnectWithoutFormationInput], {nullable:true})
    connectOrCreate?: Array<FormationSessionCreateOrConnectWithoutFormationInput>;

    @Field(() => [FormationSessionUpsertWithWhereUniqueWithoutFormationInput], {nullable:true})
    upsert?: Array<FormationSessionUpsertWithWhereUniqueWithoutFormationInput>;

    @Field(() => FormationSessionCreateManyFormationInputEnvelope, {nullable:true})
    createMany?: FormationSessionCreateManyFormationInputEnvelope;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    set?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    delete?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    connect?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionUpdateWithWhereUniqueWithoutFormationInput], {nullable:true})
    update?: Array<FormationSessionUpdateWithWhereUniqueWithoutFormationInput>;

    @Field(() => [FormationSessionUpdateManyWithWhereWithoutFormationInput], {nullable:true})
    updateMany?: Array<FormationSessionUpdateManyWithWhereWithoutFormationInput>;

    @Field(() => [FormationSessionScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationSessionScalarWhereInput>;
}
