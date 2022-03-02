import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';
import { FormationClassOrderByWithRelationInput } from './formation-class-order-by-with-relation.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationClassScalarFieldEnum } from './formation-class-scalar-field.enum';

@ArgsType()
export class FindManyFormationClassArgs {

    @Field(() => FormationClassWhereInput, {nullable:true})
    where?: FormationClassWhereInput;

    @Field(() => [FormationClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationClassOrderByWithRelationInput>;

    @Field(() => FormationClassWhereUniqueInput, {nullable:true})
    cursor?: FormationClassWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FormationClassScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FormationClassScalarFieldEnum>;
}
