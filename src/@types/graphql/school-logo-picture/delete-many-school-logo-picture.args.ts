import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';

@ArgsType()
export class DeleteManySchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    where?: SchoolLogoPictureWhereInput;
}
