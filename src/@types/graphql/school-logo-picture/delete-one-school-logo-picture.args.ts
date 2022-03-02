import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';

@ArgsType()
export class DeleteOneSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;
}
