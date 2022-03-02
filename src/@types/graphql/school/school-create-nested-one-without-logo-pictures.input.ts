import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutLogoPicturesInput } from './school-create-without-logo-pictures.input';
import { SchoolCreateOrConnectWithoutLogoPicturesInput } from './school-create-or-connect-without-logo-pictures.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutLogoPicturesInput {

    @Field(() => SchoolCreateWithoutLogoPicturesInput, {nullable:true})
    create?: SchoolCreateWithoutLogoPicturesInput;

    @Field(() => SchoolCreateOrConnectWithoutLogoPicturesInput, {nullable:true})
    connectOrCreate?: SchoolCreateOrConnectWithoutLogoPicturesInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    connect?: SchoolWhereUniqueInput;
}
