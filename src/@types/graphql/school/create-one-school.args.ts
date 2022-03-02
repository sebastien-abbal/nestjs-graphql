import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolCreateInput } from './school-create.input';

@ArgsType()
export class CreateOneSchoolArgs {

    @Field(() => SchoolCreateInput, {nullable:false})
    data!: SchoolCreateInput;
}
