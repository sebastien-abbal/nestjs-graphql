import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaStatus } from './media-status.enum';

@InputType()
export class NestedEnumMediaStatusFilter {

    @Field(() => MediaStatus, {nullable:true})
    equals?: keyof typeof MediaStatus;

    @Field(() => [MediaStatus], {nullable:true})
    in?: Array<keyof typeof MediaStatus>;

    @Field(() => [MediaStatus], {nullable:true})
    notIn?: Array<keyof typeof MediaStatus>;

    @Field(() => NestedEnumMediaStatusFilter, {nullable:true})
    not?: NestedEnumMediaStatusFilter;
}
