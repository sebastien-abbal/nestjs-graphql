import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutSchoolsInput } from './formation-create-without-schools.input';
import { FormationCreateOrConnectWithoutSchoolsInput } from './formation-create-or-connect-without-schools.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';

@InputType()
export class FormationUncheckedCreateNestedManyWithoutSchoolsInput {

    @Field(() => [FormationCreateWithoutSchoolsInput], {nullable:true})
    create?: Array<FormationCreateWithoutSchoolsInput>;

    @Field(() => [FormationCreateOrConnectWithoutSchoolsInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutSchoolsInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;
}
