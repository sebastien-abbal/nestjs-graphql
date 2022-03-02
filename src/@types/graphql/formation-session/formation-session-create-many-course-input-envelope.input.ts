import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateManyCourseInput } from './formation-session-create-many-course.input';

@InputType()
export class FormationSessionCreateManyCourseInputEnvelope {

    @Field(() => [FormationSessionCreateManyCourseInput], {nullable:false})
    data!: Array<FormationSessionCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
