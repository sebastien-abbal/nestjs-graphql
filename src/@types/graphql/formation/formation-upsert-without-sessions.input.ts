import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationUpdateWithoutSessionsInput } from './formation-update-without-sessions.input';
import { FormationCreateWithoutSessionsInput } from './formation-create-without-sessions.input';

@InputType()
export class FormationUpsertWithoutSessionsInput {

    @Field(() => FormationUpdateWithoutSessionsInput, {nullable:false})
    update!: FormationUpdateWithoutSessionsInput;

    @Field(() => FormationCreateWithoutSessionsInput, {nullable:false})
    create!: FormationCreateWithoutSessionsInput;
}
