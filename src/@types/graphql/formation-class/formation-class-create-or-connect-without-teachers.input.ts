import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassCreateWithoutTeachersInput } from './formation-class-create-without-teachers.input';

@InputType()
export class FormationClassCreateOrConnectWithoutTeachersInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassCreateWithoutTeachersInput, {nullable:false})
    create!: FormationClassCreateWithoutTeachersInput;
}
