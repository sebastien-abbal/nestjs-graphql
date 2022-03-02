import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationCreateManyInput } from './formation-create-many.input';

@ArgsType()
export class CreateManyFormationArgs {

    @Field(() => [FormationCreateManyInput], {nullable:false})
    data!: Array<FormationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
