import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFormationOwnersInput } from './user-create-without-formation-owners.input';
import { UserCreateOrConnectWithoutFormationOwnersInput } from './user-create-or-connect-without-formation-owners.input';
import { UserUpsertWithWhereUniqueWithoutFormationOwnersInput } from './user-upsert-with-where-unique-without-formation-owners.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFormationOwnersInput } from './user-update-with-where-unique-without-formation-owners.input';
import { UserUpdateManyWithWhereWithoutFormationOwnersInput } from './user-update-many-with-where-without-formation-owners.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFormationOwnersInput {

    @Field(() => [UserCreateWithoutFormationOwnersInput], {nullable:true})
    create?: Array<UserCreateWithoutFormationOwnersInput>;

    @Field(() => [UserCreateOrConnectWithoutFormationOwnersInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFormationOwnersInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFormationOwnersInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFormationOwnersInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFormationOwnersInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutFormationOwnersInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFormationOwnersInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutFormationOwnersInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
