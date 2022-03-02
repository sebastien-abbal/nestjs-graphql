import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutOwnersInput } from './formation-create-without-owners.input';
import { FormationCreateOrConnectWithoutOwnersInput } from './formation-create-or-connect-without-owners.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationCreateNestedManyWithoutOwnersInput {

    @Field(() => [FormationCreateWithoutOwnersInput], {nullable:true})
    create?: Array<FormationCreateWithoutOwnersInput>;

    @Field(() => [FormationCreateOrConnectWithoutOwnersInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutOwnersInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;
}
