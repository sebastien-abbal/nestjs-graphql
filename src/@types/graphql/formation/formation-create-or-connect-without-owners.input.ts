import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutOwnersInput } from './formation-create-without-owners.input';

@InputType()
export class FormationCreateOrConnectWithoutOwnersInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutOwnersInput, {nullable:false})
    create!: FormationCreateWithoutOwnersInput;
}
