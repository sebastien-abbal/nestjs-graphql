import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutSessionsInput } from './formation-create-without-sessions.input';
import { FormationCreateOrConnectWithoutSessionsInput } from './formation-create-or-connect-without-sessions.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationCreateNestedOneWithoutSessionsInput {

    @Field(() => FormationCreateWithoutSessionsInput, {nullable:true})
    create?: FormationCreateWithoutSessionsInput;

    @Field(() => FormationCreateOrConnectWithoutSessionsInput, {nullable:true})
    connectOrCreate?: FormationCreateOrConnectWithoutSessionsInput;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    connect?: FormationWhereUniqueInput;
}
