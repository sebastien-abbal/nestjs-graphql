import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from './media-provider.enum';

@InputType()
export class NestedEnumMediaProviderFilter {

    @Field(() => MediaProvider, {nullable:true})
    equals?: keyof typeof MediaProvider;

    @Field(() => [MediaProvider], {nullable:true})
    in?: Array<keyof typeof MediaProvider>;

    @Field(() => [MediaProvider], {nullable:true})
    notIn?: Array<keyof typeof MediaProvider>;

    @Field(() => NestedEnumMediaProviderFilter, {nullable:true})
    not?: NestedEnumMediaProviderFilter;
}
