import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutHeadMasterInput } from './formation-update-without-head-master.input';

@InputType()
export class FormationUpdateWithWhereUniqueWithoutHeadMasterInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutHeadMasterInput, {nullable:false})
    data!: FormationUpdateWithoutHeadMasterInput;
}
