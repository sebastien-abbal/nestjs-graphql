import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGender } from './user-gender.enum';
import { NestedEnumUserGenderWithAggregatesFilter } from './nested-enum-user-gender-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserGenderFilter } from './nested-enum-user-gender-filter.input';

@InputType()
export class EnumUserGenderWithAggregatesFilter {

    @Field(() => UserGender, {nullable:true})
    equals?: keyof typeof UserGender;

    @Field(() => [UserGender], {nullable:true})
    in?: Array<keyof typeof UserGender>;

    @Field(() => [UserGender], {nullable:true})
    notIn?: Array<keyof typeof UserGender>;

    @Field(() => NestedEnumUserGenderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserGenderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserGenderFilter, {nullable:true})
    _min?: NestedEnumUserGenderFilter;

    @Field(() => NestedEnumUserGenderFilter, {nullable:true})
    _max?: NestedEnumUserGenderFilter;
}
