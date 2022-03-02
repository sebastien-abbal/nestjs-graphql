import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateWithoutSchoolsInput } from './formation-create-without-schools.input';
import { FormationCreateOrConnectWithoutSchoolsInput } from './formation-create-or-connect-without-schools.input';
import { FormationUpsertWithWhereUniqueWithoutSchoolsInput } from './formation-upsert-with-where-unique-without-schools.input';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithWhereUniqueWithoutSchoolsInput } from './formation-update-with-where-unique-without-schools.input';
import { FormationUpdateManyWithWhereWithoutSchoolsInput } from './formation-update-many-with-where-without-schools.input';
import { FormationScalarWhereInput } from './formation-scalar-where.input';

@InputType()
export class FormationUpdateManyWithoutSchoolsInput {

    @Field(() => [FormationCreateWithoutSchoolsInput], {nullable:true})
    create?: Array<FormationCreateWithoutSchoolsInput>;

    @Field(() => [FormationCreateOrConnectWithoutSchoolsInput], {nullable:true})
    connectOrCreate?: Array<FormationCreateOrConnectWithoutSchoolsInput>;

    @Field(() => [FormationUpsertWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    upsert?: Array<FormationUpsertWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    set?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    delete?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationWhereUniqueInput], {nullable:true})
    connect?: Array<FormationWhereUniqueInput>;

    @Field(() => [FormationUpdateWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    update?: Array<FormationUpdateWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => [FormationUpdateManyWithWhereWithoutSchoolsInput], {nullable:true})
    updateMany?: Array<FormationUpdateManyWithWhereWithoutSchoolsInput>;

    @Field(() => [FormationScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationScalarWhereInput>;
}
