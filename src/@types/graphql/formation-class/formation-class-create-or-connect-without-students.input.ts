import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { FormationClassCreateWithoutStudentsInput } from './formation-class-create-without-students.input';

@InputType()
export class FormationClassCreateOrConnectWithoutStudentsInput {

    @Field(() => FormationClassWhereUniqueInput, {nullable:false})
    where!: FormationClassWhereUniqueInput;

    @Field(() => FormationClassCreateWithoutStudentsInput, {nullable:false})
    create!: FormationClassCreateWithoutStudentsInput;
}
