import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationTimeFormat } from './formation-time-format.enum';

@InputType()
export class NestedEnumFormationTimeFormatFilter {

    @Field(() => FormationTimeFormat, {nullable:true})
    equals?: keyof typeof FormationTimeFormat;

    @Field(() => [FormationTimeFormat], {nullable:true})
    in?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => [FormationTimeFormat], {nullable:true})
    notIn?: Array<keyof typeof FormationTimeFormat>;

    @Field(() => NestedEnumFormationTimeFormatFilter, {nullable:true})
    not?: NestedEnumFormationTimeFormatFilter;
}
