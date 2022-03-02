import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationFormat } from './formation-format.enum';
import { NestedEnumFormationFormatWithAggregatesFilter } from './nested-enum-formation-format-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFormationFormatFilter } from './nested-enum-formation-format-filter.input';

@InputType()
export class EnumFormationFormatWithAggregatesFilter {

    @Field(() => FormationFormat, {nullable:true})
    equals?: keyof typeof FormationFormat;

    @Field(() => [FormationFormat], {nullable:true})
    in?: Array<keyof typeof FormationFormat>;

    @Field(() => [FormationFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationFormat>;

    @Field(() => NestedEnumFormationFormatWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFormationFormatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFormationFormatFilter, {nullable:true})
    _min?: NestedEnumFormationFormatFilter;

    @Field(() => NestedEnumFormationFormatFilter, {nullable:true})
    _max?: NestedEnumFormationFormatFilter;
}
