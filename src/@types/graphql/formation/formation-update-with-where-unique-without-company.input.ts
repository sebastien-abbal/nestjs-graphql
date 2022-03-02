import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutCompanyInput } from './formation-update-without-company.input';

@InputType()
export class FormationUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutCompanyInput, {nullable:false})
    data!: FormationUpdateWithoutCompanyInput;
}
