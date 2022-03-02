import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolCreateManyInput } from './school-create-many.input';

@ArgsType()
export class CreateManySchoolArgs {

    @Field(() => [SchoolCreateManyInput], {nullable:false})
    data!: Array<SchoolCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
