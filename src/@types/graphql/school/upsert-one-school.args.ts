import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolCreateInput } from './school-create.input';
import { SchoolUpdateInput } from './school-update.input';

@ArgsType()
export class UpsertOneSchoolArgs {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateInput, {nullable:false})
    create!: SchoolCreateInput;

    @Field(() => SchoolUpdateInput, {nullable:false})
    update!: SchoolUpdateInput;
}
