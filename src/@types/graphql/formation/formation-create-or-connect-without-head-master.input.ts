import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutHeadMasterInput } from './formation-create-without-head-master.input';

@InputType()
export class FormationCreateOrConnectWithoutHeadMasterInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutHeadMasterInput, {nullable:false})
    create!: FormationCreateWithoutHeadMasterInput;
}
