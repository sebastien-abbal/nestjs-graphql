import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithoutTeachersInput } from './formation-class-update-without-teachers.input';

@InputType()
export class FormationClassUpdateWithWhereUniqueWithoutTeachersInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassUpdateWithoutTeachersInput, {nullable:false})
    data!: FormationClassUpdateWithoutTeachersInput;
}
