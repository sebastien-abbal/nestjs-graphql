import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutCompanyInput } from './formation-create-without-company.input';
import { FormationCreateOrConnectWithoutCompanyInput } from './formation-create-or-connect-without-company.input';
import { FormationUpsertWithWhereUniqueWithoutCompanyInput } from './formation-upsert-with-where-unique-without-company.input';
import { FormationCreateManyCompanyInputEnvelope } from './formation-create-many-company-input-envelope.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithWhereUniqueWithoutCompanyInput } from './formation-update-with-where-unique-without-company.input';
import { FormationUpdateManyWithWhereWithoutCompanyInput } from './formation-update-many-with-where-without-company.input';
import { FormationScalarWhereInput } from './formation-scalar-where.input';

@InputType()
export class FormationUpdateManyWithoutCompanyInput {

    @Field(() => [FormationCreateWithoutCompanyInput], {nullable:true})
    create?: Array<FormationCreateWithoutCompanyInput>;

    @Field(() => [FormationCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutCompanyInput>;

    @Field(() => [FormationUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    upsert?: Array<FormationUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => FormationCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: FormationCreateManyCompanyInputEnvelope;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    set?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    delete?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    update?: Array<FormationUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [FormationUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    updateMany?: Array<FormationUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationScalarWhereInput>;
}
