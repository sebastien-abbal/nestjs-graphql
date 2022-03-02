import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassCreateWithoutFormationInput } from './formation-class-create-without-formation.input';

@InputType()
export class FormationClassCreateOrConnectWithoutFormationInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassCreateWithoutFormationInput, {nullable:false})
    create!: FormationClassCreateWithoutFormationInput;
}
