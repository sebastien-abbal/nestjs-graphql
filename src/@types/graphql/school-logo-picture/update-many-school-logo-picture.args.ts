import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureUpdateManyMutationInput } from './school-logo-picture-update-many-mutation.input';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';

@ArgsType()
export class UpdateManySchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureUpdateManyMutationInput, {nullable:false})
    data!: SchoolLogoPictureUpdateManyMutationInput;

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    where?: SchoolLogoPictureWhereInput;
}
