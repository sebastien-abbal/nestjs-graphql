import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCreateManyInput } from './course-create-many.input';

@ArgsType()
export class CreateManyCourseArgs {

    @Field(() => [CourseCreateManyInput], {nullable:false})
    data!: Array<CourseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
