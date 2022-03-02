import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutStudentsInput } from './formation-class-create-without-students.input';
import { FormationClassCreateOrConnectWithoutStudentsInput } from './formation-class-create-or-connect-without-students.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';

@InputType()
export class FormationClassCreateNestedManyWithoutStudentsInput {

    @Field(() => [FormationClassCreateWithoutStudentsInput], {nullable:true})
    create?: Array<FormationClassCreateWithoutStudentsInput>;

    @Field(() => [FormationClassCreateOrConnectWithoutStudentsInput], {nullable:true})
    connectOrCreate?: Array<FormationClassCreateOrConnectWithoutStudentsInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    connect?: Array<FormationClassWhereUniqueInput>;
}
