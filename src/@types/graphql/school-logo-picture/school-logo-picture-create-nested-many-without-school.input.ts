import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureCreateWithoutSchoolInput } from './school-logo-picture-create-without-school.input';
import { SchoolLogoPictureCreateOrConnectWithoutSchoolInput } from './school-logo-picture-create-or-connect-without-school.input';
import { SchoolLogoPictureCreateManySchoolInputEnvelope } from './school-logo-picture-create-many-school-input-envelope.input';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';

@InputType()
export class SchoolLogoPictureCreateNestedManyWithoutSchoolInput {

    @Field(() => [SchoolLogoPictureCreateWithoutSchoolInput], {nullable:true})
    create?: Array<SchoolLogoPictureCreateWithoutSchoolInput>;

    @Field(() => [SchoolLogoPictureCreateOrConnectWithoutSchoolInput], {nullable:true})
    connectOrCreate?: Array<SchoolLogoPictureCreateOrConnectWithoutSchoolInput>;

    @Field(() => SchoolLogoPictureCreateManySchoolInputEnvelope, {nullable:true})
    createMany?: SchoolLogoPictureCreateManySchoolInputEnvelope;

    @Field(() => [SchoolLogoPictureWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolLogoPictureWhereUniqueInput>;
}
