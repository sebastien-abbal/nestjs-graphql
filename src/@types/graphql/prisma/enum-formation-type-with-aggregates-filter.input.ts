import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from './formation-type.enum';
import { NestedEnumFormationTypeWithAggregatesFilter } from './nested-enum-formation-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFormationTypeFilter } from './nested-enum-formation-type-filter.input';

@InputType()
export class EnumFormationTypeWithAggregatesFilter {

    @Field(() => FormationType, {nullable:true})
    equals?: keyof typeof FormationType;

    @Field(() => [FormationType], {nullable:true})
    in?: Array<keyof typeof FormationType>;

    @Field(() => [FormationType], {nullable:true})
    notIn?: Array<keyof typeof FormationType>;

    @Field(() => NestedEnumFormationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFormationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFormationTypeFilter, {nullable:true})
    _min?: NestedEnumFormationTypeFilter;

    @Field(() => NestedEnumFormationTypeFilter, {nullable:true})
    _max?: NestedEnumFormationTypeFilter;
}
