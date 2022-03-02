import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';

@ArgsType()
export class DeleteManySchoolArgs {

    @Field(() => SchoolWhereInput, {nullable:true})
    where?: SchoolWhereInput;
}
