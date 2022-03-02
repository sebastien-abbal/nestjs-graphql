import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseSupportSourceType } from './course-support-source-type.enum';
import { NestedEnumCourseSupportSourceTypeFilter } from './nested-enum-course-support-source-type-filter.input';

@InputType()
export class EnumCourseSupportSourceTypeFilter {

    @Field(() => CourseSupportSourceType, {nullable:true})
    equals?: keyof typeof CourseSupportSourceType;

    @Field(() => [CourseSupportSourceType], {nullable:true})
    in?: Array<keyof typeof CourseSupportSourceType>;

    @Field(() => [CourseSupportSourceType], {nullable:true})
    notIn?: Array<keyof typeof CourseSupportSourceType>;

    @Field(() => NestedEnumCourseSupportSourceTypeFilter, {nullable:true})
    not?: NestedEnumCourseSupportSourceTypeFilter;
}
