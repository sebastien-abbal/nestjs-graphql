import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutSessionsInput } from './formation-create-without-sessions.input';

@InputType()
export class FormationCreateOrConnectWithoutSessionsInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutSessionsInput, {nullable:false})
    create!: FormationCreateWithoutSessionsInput;
}
