import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolUpdateInput } from './school-update.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@ArgsType()
export class UpdateOneSchoolArgs {

    @Field(() => SchoolUpdateInput, {nullable:false})
    data!: SchoolUpdateInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;
}
