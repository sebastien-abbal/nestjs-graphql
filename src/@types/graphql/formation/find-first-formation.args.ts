import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationWhereInput } from './formation-where.input';
import { FormationOrderByWithRelationInput } from './formation-order-by-with-relation.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationScalarFieldEnum } from './formation-scalar-field.enum';

@ArgsType()
export class FindFirstFormationArgs {

    @Field(() => FormationWhereInput, {nullable:true})
    where?: FormationWhereInput;

    @Field(() => [FormationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationOrderByWithRelationInput>;

    @Field(() => FormationWhereUniqueInput, {nullable:true})
    cursor?: FormationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FormationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FormationScalarFieldEnum>;
}
