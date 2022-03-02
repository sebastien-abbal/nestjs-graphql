import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutClassesInput } from './formation-create-without-classes.input';
import { FormationCreateOrConnectWithoutClassesInput } from './formation-create-or-connect-without-classes.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationCreateNestedOneWithoutClassesInput {

    @Field(() => FormationCreateWithoutClassesInput, {nullable:true})
    create?: FormationCreateWithoutClassesInput;

    @Field(() => FormationCreateOrConnectWithoutClassesInput, {nullable:true})
    connectOrCreate?: FormationCreateOrConnectWithoutClassesInput;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    connect?: FormationWhereUniqueInput;
}
