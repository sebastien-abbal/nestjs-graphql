import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutFormationsInput } from './company-update-without-formations.input';
import { CompanyCreateWithoutFormationsInput } from './company-create-without-formations.input';

@InputType()
export class CompanyUpsertWithoutFormationsInput {

    @Field(() => CompanyUpdateWithoutFormationsInput, {nullable:false})
    update!: CompanyUpdateWithoutFormationsInput;

    @Field(() => CompanyCreateWithoutFormationsInput, {nullable:false})
    create!: CompanyCreateWithoutFormationsInput;
}
