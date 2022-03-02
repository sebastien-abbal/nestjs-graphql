import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { SchoolLogoPictureUpdateWithoutSchoolInput } from './school-logo-picture-update-without-school.input';

@InputType()
export class SchoolLogoPictureUpdateWithWhereUniqueWithoutSchoolInput {

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;

    @Field(() => SchoolLogoPictureUpdateWithoutSchoolInput, {nullable:false})
    data!: SchoolLogoPictureUpdateWithoutSchoolInput;
}
