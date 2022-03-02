import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateManyCreatedByInput } from './thinkific-item-create-many-created-by.input';

@InputType()
export class ThinkificItemCreateManyCreatedByInputEnvelope {

    @Field(() => [ThinkificItemCreateManyCreatedByInput], {nullable:false})
    data!: Array<ThinkificItemCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
