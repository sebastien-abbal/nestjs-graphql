import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureCreateWithoutSchoolInput } from './school-logo-picture-create-without-school.input';
import { SchoolLogoPictureCreateOrConnectWithoutSchoolInput } from './school-logo-picture-create-or-connect-without-school.input';
import { SchoolLogoPictureUpsertWithWhereUniqueWithoutSchoolInput } from './school-logo-picture-upsert-with-where-unique-without-school.input';
import { SchoolLogoPictureCreateManySchoolInputEnvelope } from './school-logo-picture-create-many-school-input-envelope.input';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { SchoolLogoPictureUpdateWithWhereUniqueWithoutSchoolInput } from './school-logo-picture-update-with-where-unique-without-school.input';
import { SchoolLogoPictureUpdateManyWithWhereWithoutSchoolInput } from './school-logo-picture-update-many-with-where-without-school.input';
import { SchoolLogoPictureScalarWhereInput } from './school-logo-picture-scalar-where.input';

@InputType()
export class SchoolLogoPictureUpdateManyWithoutSchoolInput {

    @Field(() => [SchoolLogoPictureCreateWithoutSchoolInput], {nullable:true})
    create?: Array<SchoolLogoPictureCreateWithoutSchoolInput>;

    @Field(() => [SchoolLogoPictureCreateOrConnectWithoutSchoolInput], {nullable:true})
    connectOrCreate?: Array<SchoolLogoPictureCreateOrConnectWithoutSchoolInput>;

    @Field(() => [SchoolLogoPictureUpsertWithWhereUniqueWithoutSchoolInput], {nullable:true})
    upsert?: Array<SchoolLogoPictureUpsertWithWhereUniqueWithoutSchoolInput>;

    @Field(() => SchoolLogoPictureCreateManySchoolInputEnvelope, {nullable:true})
    createMany?: SchoolLogoPictureCreateManySchoolInputEnvelope;

    @Field(() => [SchoolLogoPictureWhereUniqueInput], {nullable:true})
    set?: Array<SchoolLogoPictureWhereUniqueInput>;

    @Field(() => [SchoolLogoPictureWhereUniqueInput], {nullable:true})
    disconnect?: Array<SchoolLogoPictureWhereUniqueInput>;

    @Field(() => [SchoolLogoPictureWhereUniqueInput], {nullable:true})
    delete?: Array<SchoolLogoPictureWhereUniqueInput>;

    @Field(() => [SchoolLogoPictureWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolLogoPictureWhereUniqueInput>;

    @Field(() => [SchoolLogoPictureUpdateWithWhereUniqueWithoutSchoolInput], {nullable:true})
    update?: Array<SchoolLogoPictureUpdateWithWhereUniqueWithoutSchoolInput>;

    @Field(() => [SchoolLogoPictureUpdateManyWithWhereWithoutSchoolInput], {nullable:true})
    updateMany?: Array<SchoolLogoPictureUpdateManyWithWhereWithoutSchoolInput>;

    @Field(() => [SchoolLogoPictureScalarWhereInput], {nullable:true})
    deleteMany?: Array<SchoolLogoPictureScalarWhereInput>;
}
