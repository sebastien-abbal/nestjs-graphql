import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFormationHeadMastersInput } from './user-create-without-formation-head-masters.input';
import { UserCreateOrConnectWithoutFormationHeadMastersInput } from './user-create-or-connect-without-formation-head-masters.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFormationHeadMastersInput {

    @Field(() => UserCreateWithoutFormationHeadMastersInput, {nullable:true})
    create?: UserCreateWithoutFormationHeadMastersInput;

    @Field(() => UserCreateOrConnectWithoutFormationHeadMastersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFormationHeadMastersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
