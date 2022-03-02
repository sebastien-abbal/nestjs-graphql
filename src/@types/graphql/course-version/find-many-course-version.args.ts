import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';
import { CourseVersionOrderByWithRelationInput } from './course-version-order-by-with-relation.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionScalarFieldEnum } from './course-version-scalar-field.enum';

@ArgsType()
export class FindManyCourseVersionArgs {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    where?: CourseVersionWhereInput;

    @Field(() => [CourseVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseVersionOrderByWithRelationInput>;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    cursor?: CourseVersionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CourseVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CourseVersionScalarFieldEnum>;
}
