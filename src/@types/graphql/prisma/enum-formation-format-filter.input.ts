import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationFormat } from './formation-format.enum';
import { NestedEnumFormationFormatFilter } from './nested-enum-formation-format-filter.input';

@InputType()
export class EnumFormationFormatFilter {

    @Field(() => FormationFormat, {nullable:true})
    equals?: keyof typeof FormationFormat;

    @Field(() => [FormationFormat], {nullable:true})
    in?: Array<keyof typeof FormationFormat>;

    @Field(() => [FormationFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationFormat>;

    @Field(() => NestedEnumFormationFormatFilter, {nullable:true})
    not?: NestedEnumFormationFormatFilter;
}
