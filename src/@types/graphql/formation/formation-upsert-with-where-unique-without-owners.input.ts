import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutOwnersInput } from './formation-update-without-owners.input';
import { FormationCreateWithoutOwnersInput } from './formation-create-without-owners.input';

@InputType()
export class FormationUpsertWithWhereUniqueWithoutOwnersInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutOwnersInput, {nullable:false})
    update!: FormationUpdateWithoutOwnersInput;

    @Field(() => FormationCreateWithoutOwnersInput, {nullable:false})
    create!: FormationCreateWithoutOwnersInput;
}
