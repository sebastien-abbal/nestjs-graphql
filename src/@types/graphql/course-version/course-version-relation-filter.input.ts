import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';

@InputType()
export class CourseVersionRelationFilter {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    is?: CourseVersionWhereInput;

    @Field(() => CourseVersionWhereInput, {nullable:true})
    isNot?: CourseVersionWhereInput;
}
