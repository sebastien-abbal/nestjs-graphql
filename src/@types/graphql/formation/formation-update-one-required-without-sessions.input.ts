import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutSessionsInput } from './formation-create-without-sessions.input';
import { FormationCreateOrConnectWithoutSessionsInput } from './formation-create-or-connect-without-sessions.input';
import { FormationUpsertWithoutSessionsInput } from './formation-upsert-without-sessions.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutSessionsInput } from './formation-update-without-sessions.input';

@InputType()
export class FormationUpdateOneRequiredWithoutSessionsInput {

    @Field(() => FormationCreateWithoutSessionsInput, {nullable:true})
    create?: FormationCreateWithoutSessionsInput;

    @Field(() => FormationCreateOrConnectWithoutSessionsInput, {nullable:true})
    connectOrCreate?: FormationCreateOrConnectWithoutSessionsInput;

    @Field(() => FormationUpsertWithoutSessionsInput, {nullable:true})
    upsert?: FormationUpsertWithoutSessionsInput;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    connect?: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutSessionsInput, {nullable:true})
    update?: FormationUpdateWithoutSessionsInput;
}
