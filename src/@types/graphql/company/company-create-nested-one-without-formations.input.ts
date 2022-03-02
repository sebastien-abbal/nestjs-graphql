import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutFormationsInput } from './company-create-without-formations.input';
import { CompanyCreateOrConnectWithoutFormationsInput } from './company-create-or-connect-without-formations.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutFormationsInput {

    @Field(() => CompanyCreateWithoutFormationsInput, {nullable:true})
    create?: CompanyCreateWithoutFormationsInput;

    @Field(() => CompanyCreateOrConnectWithoutFormationsInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutFormationsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;
}
