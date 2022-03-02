import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationTimeFormat } from './formation-time-format.enum';
import { NestedEnumFormationTimeFormatFilter } from './nested-enum-formation-time-format-filter.input';

@InputType()
export class EnumFormationTimeFormatFilter {

    @Field(() => FormationTimeFormat, {nullable:true})
    equals?: keyof typeof FormationTimeFormat;

    @Field(() => [FormationTimeFormat], {nullable:true})
    in?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => [FormationTimeFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => NestedEnumFormationTimeFormatFilter, {nullable:true})
    not?: NestedEnumFormationTimeFormatFilter;
}
