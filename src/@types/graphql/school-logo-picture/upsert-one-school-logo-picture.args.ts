import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { SchoolLogoPictureCreateInput } from './school-logo-picture-create.input';
import { SchoolLogoPictureUpdateInput } from './school-logo-picture-update.input';

@ArgsType()
export class UpsertOneSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;

    @Field(() => SchoolLogoPictureCreateInput, {nullable:false})
    create!: SchoolLogoPictureCreateInput;

    @Field(() => SchoolLogoPictureUpdateInput, {nullable:false})
    update!: SchoolLogoPictureUpdateInput;
}
