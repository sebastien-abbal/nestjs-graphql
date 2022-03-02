import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutClassesInput } from './formation-create-without-classes.input';
import { FormationCreateOrConnectWithoutClassesInput } from './formation-create-or-connect-without-classes.input';
import { FormationUpsertWithoutClassesInput } from './formation-upsert-without-classes.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutClassesInput } from './formation-update-without-classes.input';

@InputType()
export class FormationUpdateOneRequiredWithoutClassesInput {

    @Field(() => FormationCreateWithoutClassesInput, {nullable:true})
    create?: FormationCreateWithoutClassesInput;

    @Field(() => FormationCreateOrConnectWithoutClassesInput, {nullable:true})
    connectOrCreate?: FormationCreateOrConnectWithoutClassesInput;

    @Field(() => FormationUpsertWithoutClassesInput, {nullable:true})
    upsert?: FormationUpsertWithoutClassesInput;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    connect?: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutClassesInput, {nullable:true})
    update?: FormationUpdateWithoutClassesInput;
}
