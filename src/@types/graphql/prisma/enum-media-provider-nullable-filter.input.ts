import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from './media-provider.enum';
import { NestedEnumMediaProviderNullableFilter } from './nested-enum-media-provider-nullable-filter.input';

@InputType()
export class EnumMediaProviderNullableFilter {

    @Field(() => MediaProvider, {nullable:true})
    equals?: keyof typeof MediaProvider;

    @Field(() => [MediaProvider], {nullable:true})
    in?: Array<keyof typeof MediaProvider>;

    @Field(() => [MediaProvider], {nullable:true})
    notIn?: Array<keyof typeof MediaProvider>;

    @Field(() => NestedEnumMediaProviderNullableFilter, {nullable:true})
    not?: NestedEnumMediaProviderNullableFilter;
}
