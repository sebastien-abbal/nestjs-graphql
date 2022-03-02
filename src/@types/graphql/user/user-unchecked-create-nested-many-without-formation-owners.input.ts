import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFormationOwnersInput } from './user-create-without-formation-owners.input';
import { UserCreateOrConnectWithoutFormationOwnersInput } from './user-create-or-connect-without-formation-owners.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFormationOwnersInput {

    @Field(() => [UserCreateWithoutFormationOwnersInput], {nullable:true})
    create?: Array<UserCreateWithoutFormationOwnersInput>;

    @Field(() => [UserCreateOrConnectWithoutFormationOwnersInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFormationOwnersInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
