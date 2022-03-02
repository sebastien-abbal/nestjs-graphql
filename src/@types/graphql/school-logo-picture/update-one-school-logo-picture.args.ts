import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureUpdateInput } from './school-logo-picture-update.input';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';

@ArgsType()
export class UpdateOneSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureUpdateInput, {nullable:false})
    data!: SchoolLogoPictureUpdateInput;

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;
}
