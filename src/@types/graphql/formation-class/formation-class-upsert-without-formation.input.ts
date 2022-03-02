import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassUpdateWithoutFormationInput } from './formation-class-update-without-formation.input';
import { FormationClassCreateWithoutFormationInput } from './formation-class-create-without-formation.input';

@InputType()
export class FormationClassUpsertWithoutFormationInput {

    @Field(() => FormationClassUpdateWithoutFormationInput, {nullable:false})
    update!: FormationClassUpdateWithoutFormationInput;

    @Field(() => FormationClassCreateWithoutFormationInput, {nullable:false})
    create!: FormationClassCreateWithoutFormationInput;
}
