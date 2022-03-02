import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateWithoutFormationsInput } from './company-create-without-formations.input';

@InputType()
export class CompanyCreateOrConnectWithoutFormationsInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    where!: CompanyWhereUniqueInput;

    @Field(() => CompanyCreateWithoutFormationsInput, {nullable:false})
    create!: CompanyCreateWithoutFormationsInput;
}
