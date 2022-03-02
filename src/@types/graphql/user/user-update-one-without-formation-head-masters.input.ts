import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFormationHeadMastersInput } from './user-create-without-formation-head-masters.input';
import { UserCreateOrConnectWithoutFormationHeadMastersInput } from './user-create-or-connect-without-formation-head-masters.input';
import { UserUpsertWithoutFormationHeadMastersInput } from './user-upsert-without-formation-head-masters.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFormationHeadMastersInput } from './user-update-without-formation-head-masters.input';

@InputType()
export class UserUpdateOneWithoutFormationHeadMastersInput {

    @Field(() => UserCreateWithoutFormationHeadMastersInput, {nullable:true})
    create?: UserCreateWithoutFormationHeadMastersInput;

    @Field(() => UserCreateOrConnectWithoutFormationHeadMastersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFormationHeadMastersInput;

    @Field(() => UserUpsertWithoutFormationHeadMastersInput, {nullable:true})
    upsert?: UserUpsertWithoutFormationHeadMastersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFormationHeadMastersInput, {nullable:true})
    update?: UserUpdateWithoutFormationHeadMastersInput;
}
