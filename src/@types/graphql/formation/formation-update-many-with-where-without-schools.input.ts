import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationScalarWhereInput } from './formation-scalar-where.input';
import { FormationUpdateManyMutationInput } from './formation-update-many-mutation.input';

@InputType()
export class FormationUpdateManyWithWhereWithoutSchoolsInput {

    @Field(() => FormationScalarWhereInput, {nullable:false})
    where!: FormationScalarWhereInput;

    @Field(() => FormationUpdateManyMutationInput, {nullable:false})
    data!: FormationUpdateManyMutationInput;
}
