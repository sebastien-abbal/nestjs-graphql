import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationUpdateWithoutClassesInput } from './formation-update-without-classes.input';
import { FormationCreateWithoutClassesInput } from './formation-create-without-classes.input';

@InputType()
export class FormationUpsertWithoutClassesInput {

    @Field(() => FormationUpdateWithoutClassesInput, {nullable:false})
    update!: FormationUpdateWithoutClassesInput;

    @Field(() => FormationCreateWithoutClassesInput, {nullable:false})
    create!: FormationCreateWithoutClassesInput;
}
