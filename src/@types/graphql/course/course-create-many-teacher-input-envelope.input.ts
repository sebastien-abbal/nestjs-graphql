import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateManyTeacherInput } from './course-create-many-teacher.input';

@InputType()
export class CourseCreateManyTeacherInputEnvelope {

    @Field(() => [CourseCreateManyTeacherInput], {nullable:false})
    data!: Array<CourseCreateManyTeacherInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
