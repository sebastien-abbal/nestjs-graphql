import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseSupportSourceType } from './course-support-source-type.enum';
import { NestedEnumCourseSupportSourceTypeWithAggregatesFilter } from './nested-enum-course-support-source-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCourseSupportSourceTypeFilter } from './nested-enum-course-support-source-type-filter.input';

@InputType()
export class EnumCourseSupportSourceTypeWithAggregatesFilter {

    @Field(() => CourseSupportSourceType, {nullable:true})
    equals?: keyof typeof CourseSupportSourceType;

    @Field(() => [CourseSupportSourceType], {nullable:true})
    in?: Array<keyof typeof CourseSupportSourceType>;

    @Field(() => [CourseSupportSourceType], {nullable:true})
    notIn?: Array<keyof typeof CourseSupportSourceType>;

    @Field(() => NestedEnumCourseSupportSourceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCourseSupportSourceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCourseSupportSourceTypeFilter, {nullable:true})
    _min?: NestedEnumCourseSupportSourceTypeFilter;

    @Field(() => NestedEnumCourseSupportSourceTypeFilter, {nullable:true})
    _max?: NestedEnumCourseSupportSourceTypeFilter;
}
