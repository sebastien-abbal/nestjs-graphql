import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolUpdateManyMutationInput } from './school-update-many-mutation.input';
import { SchoolWhereInput } from './school-where.input';

@ArgsType()
export class UpdateManySchoolArgs {

    @Field(() => SchoolUpdateManyMutationInput, {nullable:false})
    data!: SchoolUpdateManyMutationInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    where?: SchoolWhereInput;
}
