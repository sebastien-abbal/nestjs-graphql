import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutCourseInput } from './formation-session-create-without-course.input';
import { FormationSessionCreateOrConnectWithoutCourseInput } from './formation-session-create-or-connect-without-course.input';
import { FormationSessionCreateManyCourseInputEnvelope } from './formation-session-create-many-course-input-envelope.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@InputType()
export class FormationSessionCreateNestedManyWithoutCourseInput {

    @Field(() => [FormationSessionCreateWithoutCourseInput], {nullable:true})
    create?: Array<FormationSessionCreateWithoutCourseInput>;

    @Field(() => [FormationSessionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<FormationSessionCreateOrConnectWithoutCourseInput>;

    @Field(() => FormationSessionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: FormationSessionCreateManyCourseInputEnvelope;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    connect?: Array<FormationSessionWhereUniqueInput>;
}
