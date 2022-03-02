import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from './formation-type.enum';
import { NestedEnumFormationTypeFilter } from './nested-enum-formation-type-filter.input';

@InputType()
export class EnumFormationTypeFilter {

    @Field(() => FormationType, {nullable:true})
    equals?: keyof typeof FormationType;

    @Field(() => [FormationType], {nullable:true})
    in?: Array<keyof typeof FormationType>;

    @Field(() => [FormationType], {nullable:true})
    notIn?: Array<keyof typeof FormationType>;

    @Field(() => NestedEnumFormationTypeFilter, {nullable:true})
    not?: NestedEnumFormationTypeFilter;
}
