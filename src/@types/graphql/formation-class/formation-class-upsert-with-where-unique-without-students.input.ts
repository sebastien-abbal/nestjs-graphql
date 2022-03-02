import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithoutStudentsInput } from './formation-class-update-without-students.input';
import { FormationClassCreateWithoutStudentsInput } from './formation-class-create-without-students.input';

@InputType()
export class FormationClassUpsertWithWhereUniqueWithoutStudentsInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassUpdateWithoutStudentsInput, {nullable:false})
    update!: FormationClassUpdateWithoutStudentsInput;

    @Field(() => FormationClassCreateWithoutStudentsInput, {nullable:false})
    create!: FormationClassCreateWithoutStudentsInput;
}
