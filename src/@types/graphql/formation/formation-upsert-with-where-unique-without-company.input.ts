import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutCompanyInput } from './formation-update-without-company.input';
import { FormationCreateWithoutCompanyInput } from './formation-create-without-company.input';

@InputType()
export class FormationUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutCompanyInput, {nullable:false})
    update!: FormationUpdateWithoutCompanyInput;

    @Field(() => FormationCreateWithoutCompanyInput, {nullable:false})
    create!: FormationCreateWithoutCompanyInput;
}
