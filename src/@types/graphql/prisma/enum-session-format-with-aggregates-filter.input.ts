import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionFormat } from './session-format.enum';
import { NestedEnumSessionFormatWithAggregatesFilter } from './nested-enum-session-format-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSessionFormatFilter } from './nested-enum-session-format-filter.input';

@InputType()
export class EnumSessionFormatWithAggregatesFilter {

    @Field(() => SessionFormat, {nullable:true})
    equals?: keyof typeof SessionFormat;

    @Field(() => [SessionFormat], {nullable:true})
    in?: Array<keyof typeof SessionFormat>;

    @Field(() => [SessionFormat], {nullable:true})
    notIn?: Array<keyof typeof SessionFormat>;

    @Field(() => NestedEnumSessionFormatWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSessionFormatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSessionFormatFilter, {nullable:true})
    _min?: NestedEnumSessionFormatFilter;

    @Field(() => NestedEnumSessionFormatFilter, {nullable:true})
    _max?: NestedEnumSessionFormatFilter;
}
