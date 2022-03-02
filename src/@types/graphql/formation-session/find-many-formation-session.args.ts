import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionWhereInput } from './formation-session-where.input';
import { FormationSessionOrderByWithRelationInput } from './formation-session-order-by-with-relation.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationSessionScalarFieldEnum } from './formation-session-scalar-field.enum';

@ArgsType()
export class FindManyFormationSessionArgs {

    @Field(() => FormationSessionWhereInput, {nullable:true})
    where?: FormationSessionWhereInput;

    @Field(() => [FormationSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationSessionOrderByWithRelationInput>;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    cursor?: FormationSessionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FormationSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FormationSessionScalarFieldEnum>;
}
