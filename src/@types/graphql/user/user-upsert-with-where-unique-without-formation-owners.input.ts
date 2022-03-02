import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFormationOwnersInput } from './user-update-without-formation-owners.input';
import { UserCreateWithoutFormationOwnersInput } from './user-create-without-formation-owners.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFormationOwnersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFormationOwnersInput, {nullable:false})
    update!: UserUpdateWithoutFormationOwnersInput;

    @Field(() => UserCreateWithoutFormationOwnersInput, {nullable:false})
    create!: UserCreateWithoutFormationOwnersInput;
}
