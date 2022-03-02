import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThinkificItemCreateManySessionInput } from './thinkific-item-create-many-session.input';

@InputType()
export class ThinkificItemCreateManySessionInputEnvelope {

    @Field(() => [ThinkificItemCreateManySessionInput], {nullable:false})
    data!: Array<ThinkificItemCreateManySessionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
