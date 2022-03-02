import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationClassCreateWithoutTeachersInput } from './formation-class-create-without-teachers.input';
import { FormationClassCreateOrConnectWithoutTeachersInput } from './formation-class-create-or-connect-without-teachers.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';

@InputType()
export class FormationClassUncheckedCreateNestedManyWithoutTeachersInput {

    @Field(() => [FormationClassCreateWithoutTeachersInput], {nullable:true})
    create?: Array<FormationClassCreateWithoutTeachersInput>;

    @Field(() => [FormationClassCreateOrConnectWithoutTeachersInput], {nullable:true})
    connectOrCreate?: Array<FormationClassCreateOrConnectWithoutTeachersInput>;

    @Field(() => [FormationClassWhereUniqueInput], {nullable:true})
    connect?: Array<FormationClassWhereUniqueInput>;
}
