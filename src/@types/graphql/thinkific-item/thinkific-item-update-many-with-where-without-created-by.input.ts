import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemScalarWhereInput } from './thinkific-item-scalar-where.input';
import { ThinkificItemUpdateManyMutationInput } from './thinkific-item-update-many-mutation.input';

@InputType()
export class ThinkificItemUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => ThinkificItemScalarWhereInput, {nullable:false})
    where!: ThinkificItemScalarWhereInput;

    @Field(() => ThinkificItemUpdateManyMutationInput, {nullable:false})
    data!: ThinkificItemUpdateManyMutationInput;
}
