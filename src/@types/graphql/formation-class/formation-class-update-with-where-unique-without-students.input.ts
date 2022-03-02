import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithoutStudentsInput } from './formation-class-update-without-students.input';

@InputType()
export class FormationClassUpdateWithWhereUniqueWithoutStudentsInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassUpdateWithoutStudentsInput, {nullable:false})
    data!: FormationClassUpdateWithoutStudentsInput;
}
