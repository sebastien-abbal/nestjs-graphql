import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';

@InputType()
export class SchoolLogoPictureListRelationFilter {

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    every?: SchoolLogoPictureWhereInput;

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    some?: SchoolLogoPictureWhereInput;

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    none?: SchoolLogoPictureWhereInput;
}
