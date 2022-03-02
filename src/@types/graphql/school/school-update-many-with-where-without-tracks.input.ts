import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolScalarWhereInput } from './school-scalar-where.input';
import { SchoolUpdateManyMutationInput } from './school-update-many-mutation.input';

@InputType()
export class SchoolUpdateManyWithWhereWithoutTracksInput {

    @Field(() => SchoolScalarWhereInput, {nullable:false})
    where!: SchoolScalarWhereInput;

    @Field(() => SchoolUpdateManyMutationInput, {nullable:false})
    data!: SchoolUpdateManyMutationInput;
}
