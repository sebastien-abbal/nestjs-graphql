import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@ArgsType()
export class DeleteOneSchoolArgs {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;
}
