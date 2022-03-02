import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutFormationInput } from './formation-class-create-without-formation.input';
import { FormationClassCreateOrConnectWithoutFormationInput } from './formation-class-create-or-connect-without-formation.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';

@InputType()
export class FormationClassUncheckedCreateNestedOneWithoutFormationInput {

    @Field(() => FormationClassCreateWithoutFormationInput, {nullable:true})
    create?: FormationClassCreateWithoutFormationInput;

    @Field(() => FormationClassCreateOrConnectWithoutFormationInput, {nullable:true})
    connectOrCreate?: FormationClassCreateOrConnectWithoutFormationInput;

    @Field(() => FormationClassWhereUniqueInput, {nullable:true})
    connect?: FormationClassWhereUniqueInput;
}
