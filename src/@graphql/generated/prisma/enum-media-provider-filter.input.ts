import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from './media-provider.enum';
import { NestedEnumMediaProviderFilter } from './nested-enum-media-provider-filter.input';

@InputType()
export class EnumMediaProviderFilter {

    @Field(() => MediaProvider, {nullable:true})
    equals?: keyof typeof MediaProvider;

    @Field(() => [MediaProvider], {nullable:true})
    in?: Array<keyof typeof MediaProvider>;

    @Field(() => [MediaProvider], {nullable:true})
    notIn?: Array<keyof typeof MediaProvider>;

    @Field(() => NestedEnumMediaProviderFilter, {nullable:true})
    not?: NestedEnumMediaProviderFilter;
}
