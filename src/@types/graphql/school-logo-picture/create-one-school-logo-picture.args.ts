import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureCreateInput } from './school-logo-picture-create.input';

@ArgsType()
export class CreateOneSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureCreateInput, {nullable:false})
    data!: SchoolLogoPictureCreateInput;
}
