import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutFormationInput } from './formation-class-create-without-formation.input';
import { FormationClassCreateOrConnectWithoutFormationInput } from './formation-class-create-or-connect-without-formation.input';
import { FormationClassUpsertWithoutFormationInput } from './formation-class-upsert-without-formation.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithoutFormationInput } from './formation-class-update-without-formation.input';

@InputType()
export class FormationClassUncheckedUpdateOneWithoutFormationInput {

    @Field(() => FormationClassCreateWithoutFormationInput, {nullable:true})
    create?: FormationClassCreateWithoutFormationInput;

    @Field(() => FormationClassCreateOrConnectWithoutFormationInput, {nullable:true})
    connectOrCreate?: FormationClassCreateOrConnectWithoutFormationInput;

    @Field(() => FormationClassUpsertWithoutFormationInput, {nullable:true})
    upsert?: FormationClassUpsertWithoutFormationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FormationClassWhereUniqueInput, {nullable:true})
    connect?: FormationClassWhereUniqueInput;

    @Field(() => FormationClassUpdateWithoutFormationInput, {nullable:true})
    update?: FormationClassUpdateWithoutFormationInput;
}
