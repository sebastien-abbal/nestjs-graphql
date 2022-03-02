import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateManyFormationInput } from './formation-session-create-many-formation.input';

@InputType()
export class FormationSessionCreateManyFormationInputEnvelope {

    @Field(() => [FormationSessionCreateManyFormationInput], {nullable:false})
    data!: Array<FormationSessionCreateManyFormationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
