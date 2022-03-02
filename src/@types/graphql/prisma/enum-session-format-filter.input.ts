import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionFormat } from './session-format.enum';
import { NestedEnumSessionFormatFilter } from './nested-enum-session-format-filter.input';

@InputType()
export class EnumSessionFormatFilter {

    @Field(() => SessionFormat, {nullable:true})
    equals?: keyof typeof SessionFormat;

    @Field(() => [SessionFormat], {nullable:true})
    in?: Array<keyof typeof SessionFormat>;

    @Field(() => [SessionFormat], {nullable:true})
    notIn?: Array<keyof typeof SessionFormat>;

    @Field(() => NestedEnumSessionFormatFilter, {nullable:true})
    not?: NestedEnumSessionFormatFilter;
}
