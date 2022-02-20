import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaStatus } from './media-status.enum';
import { NestedEnumMediaStatusWithAggregatesFilter } from './nested-enum-media-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMediaStatusFilter } from './nested-enum-media-status-filter.input';

@InputType()
export class EnumMediaStatusWithAggregatesFilter {

    @Field(() => MediaStatus, {nullable:true})
    equals?: keyof typeof MediaStatus;

    @Field(() => [MediaStatus], {nullable:true})
    in?: Array<keyof typeof MediaStatus>;

    @Field(() => [MediaStatus], {nullable:true})
    notIn?: Array<keyof typeof MediaStatus>;

    @Field(() => NestedEnumMediaStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMediaStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMediaStatusFilter, {nullable:true})
    _min?: NestedEnumMediaStatusFilter;

    @Field(() => NestedEnumMediaStatusFilter, {nullable:true})
    _max?: NestedEnumMediaStatusFilter;
}
