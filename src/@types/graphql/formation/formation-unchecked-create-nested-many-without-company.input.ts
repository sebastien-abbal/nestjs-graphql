import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutCompanyInput } from './formation-create-without-company.input';
import { FormationCreateOrConnectWithoutCompanyInput } from './formation-create-or-connect-without-company.input';
import { FormationCreateManyCompanyInputEnvelope } from './formation-create-many-company-input-envelope.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationUncheckedCreateNestedManyWithoutCompanyInput {

    @Field(() => [FormationCreateWithoutCompanyInput], {nullable:true})
    create?: Array<FormationCreateWithoutCompanyInput>;

    @Field(() => [FormationCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutCompanyInput>;

    @Field(() => FormationCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: FormationCreateManyCompanyInputEnvelope;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;
}
