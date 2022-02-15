import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLocale } from './user-locale.enum';
import { NestedEnumUserLocaleWithAggregatesFilter } from './nested-enum-user-locale-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserLocaleFilter } from './nested-enum-user-locale-filter.input';

@InputType()
export class EnumUserLocaleWithAggregatesFilter {

    @Field(() => UserLocale, {nullable:true})
    equals?: keyof typeof UserLocale;

    @Field(() => [UserLocale], {nullable:true})
    in?: Array<keyof typeof UserLocale>;

    @Field(() => [UserLocale], {nullable:true})
    notIn?: Array<keyof typeof UserLocale>;

    @Field(() => NestedEnumUserLocaleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserLocaleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserLocaleFilter, {nullable:true})
    _min?: NestedEnumUserLocaleFilter;

    @Field(() => NestedEnumUserLocaleFilter, {nullable:true})
    _max?: NestedEnumUserLocaleFilter;
}
