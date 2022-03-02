import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CourseVersionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    versionNumber?: true;
}
