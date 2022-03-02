import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolCreateWithoutLogoPicturesInput } from './school-create-without-logo-pictures.input';

@InputType()
export class SchoolCreateOrConnectWithoutLogoPicturesInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutLogoPicturesInput, {nullable:false})
    create!: SchoolCreateWithoutLogoPicturesInput;
}
