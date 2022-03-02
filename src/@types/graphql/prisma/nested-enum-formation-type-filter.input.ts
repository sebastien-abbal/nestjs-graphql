import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationType } from './formation-type.enum';

@InputType()
export class NestedEnumFormationTypeFilter {

    @Field(() => FormationType, {nullable:true})
    equals?: keyof typeof FormationType;

    @Field(() => [FormationType], {nullable:true})
    in?: Array<keyof typeof FormationType>;

    @Field(() => [FormationType], {nullable:true})
    notIn?: Array<keyof typeof FormationType>;

    @Field(() => NestedEnumFormationTypeFilter, {nullable:true})
    not?: NestedEnumFormationTypeFilter;
}
