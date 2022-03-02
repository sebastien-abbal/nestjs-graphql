import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassScalarWhereInput } from './formation-class-scalar-where.input';
import { FormationClassUpdateManyMutationInput } from './formation-class-update-many-mutation.input';

@InputType()
export class FormationClassUpdateManyWithWhereWithoutStudentsInput {

    @Field(() => FormationClassScalarWhereInput, {nullable:false})
    where!: FormationClassScalarWhereInput;

    @Field(() => FormationClassUpdateManyMutationInput, {nullable:false})
    data!: FormationClassUpdateManyMutationInput;
}
