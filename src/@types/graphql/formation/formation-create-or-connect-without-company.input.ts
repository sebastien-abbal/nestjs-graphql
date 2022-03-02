import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutCompanyInput } from './formation-create-without-company.input';

@InputType()
export class FormationCreateOrConnectWithoutCompanyInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutCompanyInput, {nullable:false})
    create!: FormationCreateWithoutCompanyInput;
}
