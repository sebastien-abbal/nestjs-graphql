import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationSessionCreateManyInput } from './formation-session-create-many.input';

@ArgsType()
export class CreateManyFormationSessionArgs {

    @Field(() => [FormationSessionCreateManyInput], {nullable:false})
    data!: Array<FormationSessionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
