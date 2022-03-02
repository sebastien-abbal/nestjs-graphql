import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutLogoPicturesInput } from './school-update-without-logo-pictures.input';
import { SchoolCreateWithoutLogoPicturesInput } from './school-create-without-logo-pictures.input';

@InputType()
export class SchoolUpsertWithoutLogoPicturesInput {

    @Field(() => SchoolUpdateWithoutLogoPicturesInput, {nullable:false})
    update!: SchoolUpdateWithoutLogoPicturesInput;

    @Field(() => SchoolCreateWithoutLogoPicturesInput, {nullable:false})
    create!: SchoolCreateWithoutLogoPicturesInput;
}
