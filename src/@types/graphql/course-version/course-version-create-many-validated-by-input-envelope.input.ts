import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateManyValidatedByInput } from './course-version-create-many-validated-by.input';

@InputType()
export class CourseVersionCreateManyValidatedByInputEnvelope {

    @Field(() => [CourseVersionCreateManyValidatedByInput], {nullable:false})
    data!: Array<CourseVersionCreateManyValidatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
