import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGender } from './user-gender.enum';
import { NestedEnumUserGenderFilter } from './nested-enum-user-gender-filter.input';

@InputType()
export class EnumUserGenderFilter {

    @Field(() => UserGender, {nullable:true})
    equals?: keyof typeof UserGender;

    @Field(() => [UserGender], {nullable:true})
    in?: Array<keyof typeof UserGender>;

    @Field(() => [UserGender], {nullable:true})
    notIn?: Array<keyof typeof UserGender>;

    @Field(() => NestedEnumUserGenderFilter, {nullable:true})
    not?: NestedEnumUserGenderFilter;
}
