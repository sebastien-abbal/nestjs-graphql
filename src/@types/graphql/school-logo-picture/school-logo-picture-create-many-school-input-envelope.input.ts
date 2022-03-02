import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolLogoPictureCreateManySchoolInput } from './school-logo-picture-create-many-school.input';

@InputType()
export class SchoolLogoPictureCreateManySchoolInputEnvelope {

    @Field(() => [SchoolLogoPictureCreateManySchoolInput], {nullable:false})
    data!: Array<SchoolLogoPictureCreateManySchoolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
