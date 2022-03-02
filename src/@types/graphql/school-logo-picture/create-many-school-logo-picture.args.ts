import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureCreateManyInput } from './school-logo-picture-create-many.input';

@ArgsType()
export class CreateManySchoolLogoPictureArgs {

    @Field(() => [SchoolLogoPictureCreateManyInput], {nullable:false})
    data!: Array<SchoolLogoPictureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
