import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutFormationsInput } from './company-create-without-formations.input';
import { CompanyCreateOrConnectWithoutFormationsInput } from './company-create-or-connect-without-formations.input';
import { CompanyUpsertWithoutFormationsInput } from './company-upsert-without-formations.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateWithoutFormationsInput } from './company-update-without-formations.input';

@InputType()
export class CompanyUpdateOneWithoutFormationsInput {

    @Field(() => CompanyCreateWithoutFormationsInput, {nullable:true})
    create?: CompanyCreateWithoutFormationsInput;

    @Field(() => CompanyCreateOrConnectWithoutFormationsInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutFormationsInput;

    @Field(() => CompanyUpsertWithoutFormationsInput, {nullable:true})
    upsert?: CompanyUpsertWithoutFormationsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;

    @Field(() => CompanyUpdateWithoutFormationsInput, {nullable:true})
    update?: CompanyUpdateWithoutFormationsInput;
}
