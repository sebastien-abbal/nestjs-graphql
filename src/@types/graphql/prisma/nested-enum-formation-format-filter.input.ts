import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationFormat } from './formation-format.enum';

@InputType()
export class NestedEnumFormationFormatFilter {

    @Field(() => FormationFormat, {nullable:true})
    equals?: keyof typeof FormationFormat;

    @Field(() => [FormationFormat], {nullable:true})
    in?: Array<keyof typeof FormationFormat>;

    @Field(() => [FormationFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationFormat>;

    @Field(() => NestedEnumFormationFormatFilter, {nullable:true})
    not?: NestedEnumFormationFormatFilter;
}
