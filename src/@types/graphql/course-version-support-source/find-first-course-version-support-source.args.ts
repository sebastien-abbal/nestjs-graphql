import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';
import { CourseVersionSupportSourceOrderByWithRelationInput } from './course-version-support-source-order-by-with-relation.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseVersionSupportSourceScalarFieldEnum } from './course-version-support-source-scalar-field.enum';

@ArgsType()
export class FindFirstCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    where?: CourseVersionSupportSourceWhereInput;

    @Field(() => [CourseVersionSupportSourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseVersionSupportSourceOrderByWithRelationInput>;

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:true})
    cursor?: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CourseVersionSupportSourceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CourseVersionSupportSourceScalarFieldEnum>;
}
