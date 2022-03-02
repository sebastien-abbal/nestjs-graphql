import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';

@InputType()
export class CourseVersionListRelationFilter {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    every?: CourseVersionWhereInput;

    @Field(() => CourseVersionWhereInput, {nullable:true})
    some?: CourseVersionWhereInput;

    @Field(() => CourseVersionWhereInput, {nullable:true})
    none?: CourseVersionWhereInput;
}
