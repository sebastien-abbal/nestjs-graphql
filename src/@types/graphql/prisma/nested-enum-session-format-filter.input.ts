import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionFormat } from './session-format.enum';

@InputType()
export class NestedEnumSessionFormatFilter {

    @Field(() => SessionFormat, {nullable:true})
    equals?: keyof typeof SessionFormat;

    @Field(() => [SessionFormat], {nullable:true})
    in?: Array<keyof typeof SessionFormat>;

    @Field(() => [SessionFormat], {nullable:true})
    notIn?: Array<keyof typeof SessionFormat>;

    @Field(() => NestedEnumSessionFormatFilter, {nullable:true})
    not?: NestedEnumSessionFormatFilter;
}
