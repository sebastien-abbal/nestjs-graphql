import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFormationHeadMastersInput } from './user-update-without-formation-head-masters.input';
import { UserCreateWithoutFormationHeadMastersInput } from './user-create-without-formation-head-masters.input';

@InputType()
export class UserUpsertWithoutFormationHeadMastersInput {

    @Field(() => UserUpdateWithoutFormationHeadMastersInput, {nullable:false})
    update!: UserUpdateWithoutFormationHeadMastersInput;

    @Field(() => UserCreateWithoutFormationHeadMastersInput, {nullable:false})
    create!: UserCreateWithoutFormationHeadMastersInput;
}
