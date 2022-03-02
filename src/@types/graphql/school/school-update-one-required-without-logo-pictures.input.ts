import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutLogoPicturesInput } from './school-create-without-logo-pictures.input';
import { SchoolCreateOrConnectWithoutLogoPicturesInput } from './school-create-or-connect-without-logo-pictures.input';
import { SchoolUpsertWithoutLogoPicturesInput } from './school-upsert-without-logo-pictures.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutLogoPicturesInput } from './school-update-without-logo-pictures.input';

@InputType()
export class SchoolUpdateOneRequiredWithoutLogoPicturesInput {

    @Field(() => SchoolCreateWithoutLogoPicturesInput, {nullable:true})
    create?: SchoolCreateWithoutLogoPicturesInput;

    @Field(() => SchoolCreateOrConnectWithoutLogoPicturesInput, {nullable:true})
    connectOrCreate?: SchoolCreateOrConnectWithoutLogoPicturesInput;

    @Field(() => SchoolUpsertWithoutLogoPicturesInput, {nullable:true})
    upsert?: SchoolUpsertWithoutLogoPicturesInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    connect?: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutLogoPicturesInput, {nullable:true})
    update?: SchoolUpdateWithoutLogoPicturesInput;
}
