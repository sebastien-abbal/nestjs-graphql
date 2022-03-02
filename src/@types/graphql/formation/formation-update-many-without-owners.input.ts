import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutOwnersInput } from './formation-create-without-owners.input';
import { FormationCreateOrConnectWithoutOwnersInput } from './formation-create-or-connect-without-owners.input';
import { FormationUpsertWithWhereUniqueWithoutOwnersInput } from './formation-upsert-with-where-unique-without-owners.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithWhereUniqueWithoutOwnersInput } from './formation-update-with-where-unique-without-owners.input';
import { FormationUpdateManyWithWhereWithoutOwnersInput } from './formation-update-many-with-where-without-owners.input';
import { FormationScalarWhereInput } from './formation-scalar-where.input';

@InputType()
export class FormationUpdateManyWithoutOwnersInput {

    @Field(() => [FormationCreateWithoutOwnersInput], {nullable:true})
    create?: Array<FormationCreateWithoutOwnersInput>;

    @Field(() => [FormationCreateOrConnectWithoutOwnersInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutOwnersInput>;

    @Field(() => [FormationUpsertWithWhereUniqueWithoutOwnersInput], {nullable:true})
    upsert?: Array<FormationUpsertWithWhereUniqueWithoutOwnersInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    set?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    delete?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationUpdateWithWhereUniqueWithoutOwnersInput], {nullable:true})
    update?: Array<FormationUpdateWithWhereUniqueWithoutOwnersInput>;

    @Field(() => [FormationUpdateManyWithWhereWithoutOwnersInput], {nullable:true})
    updateMany?: Array<FormationUpdateManyWithWhereWithoutOwnersInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationScalarWhereInput>;
}
