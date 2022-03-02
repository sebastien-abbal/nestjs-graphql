import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutClassesInput } from './formation-create-without-classes.input';

@InputType()
export class FormationCreateOrConnectWithoutClassesInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutClassesInput, {nullable:false})
    create!: FormationCreateWithoutClassesInput;
}
