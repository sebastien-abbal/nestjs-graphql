import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateManyUserInput } from './course-version-support-source-create-many-user.input';

@InputType()
export class CourseVersionSupportSourceCreateManyUserInputEnvelope {

    @Field(() => [CourseVersionSupportSourceCreateManyUserInput], {nullable:false})
    data!: Array<CourseVersionSupportSourceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
