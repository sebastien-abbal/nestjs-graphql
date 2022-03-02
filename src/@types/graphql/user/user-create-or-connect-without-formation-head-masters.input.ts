import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFormationHeadMastersInput } from './user-create-without-formation-head-masters.input';

@InputType()
export class UserCreateOrConnectWithoutFormationHeadMastersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFormationHeadMastersInput, {nullable:false})
    create!: UserCreateWithoutFormationHeadMastersInput;
}
