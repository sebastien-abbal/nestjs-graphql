import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { SchoolLogoPictureCreateWithoutSchoolInput } from './school-logo-picture-create-without-school.input';

@InputType()
export class SchoolLogoPictureCreateOrConnectWithoutSchoolInput {

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:false})
    where!: SchoolLogoPictureWhereUniqueInput;

    @Field(() => SchoolLogoPictureCreateWithoutSchoolInput, {nullable:false})
    create!: SchoolLogoPictureCreateWithoutSchoolInput;
}
