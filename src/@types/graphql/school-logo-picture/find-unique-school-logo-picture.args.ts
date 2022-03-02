import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';

@ArgsType()
export class FindUniqueSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;
}
