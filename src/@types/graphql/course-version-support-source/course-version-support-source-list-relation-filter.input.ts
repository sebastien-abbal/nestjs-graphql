import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';

@InputType()
export class CourseVersionSupportSourceListRelationFilter {

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    every?: CourseVersionSupportSourceWhereInput;

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    some?: CourseVersionSupportSourceWhereInput;

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    none?: CourseVersionSupportSourceWhereInput;
}
