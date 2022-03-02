import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutCourseInput } from './formation-session-create-without-course.input';
import { FormationSessionCreateOrConnectWithoutCourseInput } from './formation-session-create-or-connect-without-course.input';
import { FormationSessionUpsertWithWhereUniqueWithoutCourseInput } from './formation-session-upsert-with-where-unique-without-course.input';
import { FormationSessionCreateManyCourseInputEnvelope } from './formation-session-create-many-course-input-envelope.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithWhereUniqueWithoutCourseInput } from './formation-session-update-with-where-unique-without-course.input';
import { FormationSessionUpdateManyWithWhereWithoutCourseInput } from './formation-session-update-many-with-where-without-course.input';
import { FormationSessionScalarWhereInput } from './formation-session-scalar-where.input';

@InputType()
export class FormationSessionUpdateManyWithoutCourseInput {

    @Field(() => [FormationSessionCreateWithoutCourseInput], {nullable:true})
    create?: Array<FormationSessionCreateWithoutCourseInput>;

    @Field(() => [FormationSessionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<FormationSessionCreateOrConnectWithoutCourseInput>;

    @Field(() => [FormationSessionUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    upsert?: Array<FormationSessionUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => FormationSessionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: FormationSessionCreateManyCourseInputEnvelope;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    set?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    disconnect?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    delete?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    connect?: Array<FormationSessionWhereUniqueInput>;

    @Field(() => [FormationSessionUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    update?: Array<FormationSessionUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [FormationSessionUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    updateMany?: Array<FormationSessionUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [FormationSessionScalarWhereInput], {nullable:true})
    deleteMany?: Array<FormationSessionScalarWhereInput>;
}
