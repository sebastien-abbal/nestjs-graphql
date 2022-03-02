import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFormationOwnersInput } from './user-update-without-formation-owners.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFormationOwnersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFormationOwnersInput, {nullable:false})
    data!: UserUpdateWithoutFormationOwnersInput;
}
