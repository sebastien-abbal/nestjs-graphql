import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassUpdateWithoutTeachersInput } from './formation-class-update-without-teachers.input';
import { FormationClassCreateWithoutTeachersInput } from './formation-class-create-without-teachers.input';

@InputType()
export class FormationClassUpsertWithWhereUniqueWithoutTeachersInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassUpdateWithoutTeachersInput, {nullable:false})
    update!: FormationClassUpdateWithoutTeachersInput;

    @Field(() => FormationClassCreateWithoutTeachersInput, {nullable:false})
    create!: FormationClassCreateWithoutTeachersInput;
}
