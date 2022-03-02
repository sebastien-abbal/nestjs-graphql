import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureScalarWhereInput } from './school-logo-picture-scalar-where.input';
import { SchoolLogoPictureUpdateManyMutationInput } from './school-logo-picture-update-many-mutation.input';

@InputType()
export class SchoolLogoPictureUpdateManyWithWhereWithoutSchoolInput {

    @Field(() => SchoolLogoPictureScalarWhereInput, {nullable:false})
    where!: SchoolLogoPictureScalarWhereInput;

    @Field(() => SchoolLogoPictureUpdateManyMutationInput, {nullable:false})
    data!: SchoolLogoPictureUpdateManyMutationInput;
}
