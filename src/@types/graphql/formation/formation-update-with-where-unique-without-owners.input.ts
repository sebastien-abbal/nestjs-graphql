import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutOwnersInput } from './formation-update-without-owners.input';

@InputType()
export class FormationUpdateWithWhereUniqueWithoutOwnersInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutOwnersInput, {nullable:false})
    data!: FormationUpdateWithoutOwnersInput;
}
