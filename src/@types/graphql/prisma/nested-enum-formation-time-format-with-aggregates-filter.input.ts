import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationTimeFormat } from './formation-time-format.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFormationTimeFormatFilter } from './nested-enum-formation-time-format-filter.input';

@InputType()
export class NestedEnumFormationTimeFormatWithAggregatesFilter {

    @Field(() => FormationTimeFormat, {nullable:true})
    equals?: keyof typeof FormationTimeFormat;

    @Field(() => [FormationTimeFormat], {nullable:true})
    in?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => [FormationTimeFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => NestedEnumFormationTimeFormatWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFormationTimeFormatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFormationTimeFormatFilter, {nullable:true})
    _min?: NestedEnumFormationTimeFormatFilter;

    @Field(() => NestedEnumFormationTimeFormatFilter, {nullable:true})
    _max?: NestedEnumFormationTimeFormatFilter;
}
