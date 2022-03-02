import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateManyCompanyInput } from './formation-create-many-company.input';

@InputType()
export class FormationCreateManyCompanyInputEnvelope {

    @Field(() => [FormationCreateManyCompanyInput], {nullable:false})
    data!: Array<FormationCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
