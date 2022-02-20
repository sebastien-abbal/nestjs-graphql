import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from './media-provider.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMediaProviderFilter } from './nested-enum-media-provider-filter.input';

@InputType()
export class NestedEnumMediaProviderWithAggregatesFilter {

    @Field(() => MediaProvider, {nullable:true})
    equals?: keyof typeof MediaProvider;

    @Field(() => [MediaProvider], {nullable:true})
    in?: Array<keyof typeof MediaProvider>;

    @Field(() => [MediaProvider], {nullable:true})
    notIn?: Array<keyof typeof MediaProvider>;

    @Field(() => NestedEnumMediaProviderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMediaProviderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMediaProviderFilter, {nullable:true})
    _min?: NestedEnumMediaProviderFilter;

    @Field(() => NestedEnumMediaProviderFilter, {nullable:true})
    _max?: NestedEnumMediaProviderFilter;
}
