import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionCreateManyInput } from './course-version-create-many.input';

@ArgsType()
export class CreateManyCourseVersionArgs {

    @Field(() => [CourseVersionCreateManyInput], {nullable:false})
    data!: Array<CourseVersionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
