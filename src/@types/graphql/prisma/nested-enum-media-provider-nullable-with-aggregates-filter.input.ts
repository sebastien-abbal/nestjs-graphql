import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from './media-provider.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumMediaProviderNullableFilter } from './nested-enum-media-provider-nullable-filter.input';

@InputType()
export class NestedEnumMediaProviderNullableWithAggregatesFilter {

    @Field(() => MediaProvider, {nullable:true})
    equals?: keyof typeof MediaProvider;

    @Field(() => [MediaProvider], {nullable:true})
    in?: Array<keyof typeof MediaProvider>;

    @Field(() => [MediaProvider], {nullable:true})
    notIn?: Array<keyof typeof MediaProvider>;

    @Field(() => NestedEnumMediaProviderNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMediaProviderNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumMediaProviderNullableFilter, {nullable:true})
    _min?: NestedEnumMediaProviderNullableFilter;

    @Field(() => NestedEnumMediaProviderNullableFilter, {nullable:true})
    _max?: NestedEnumMediaProviderNullableFilter;
}
