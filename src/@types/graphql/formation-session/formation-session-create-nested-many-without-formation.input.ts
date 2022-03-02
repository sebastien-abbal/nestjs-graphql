import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutFormationInput } from './formation-session-create-without-formation.input';
import { FormationSessionCreateOrConnectWithoutFormationInput } from './formation-session-create-or-connect-without-formation.input';
import { FormationSessionCreateManyFormationInputEnvelope } from './formation-session-create-many-formation-input-envelope.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@InputType()
export class FormationSessionCreateNestedManyWithoutFormationInput {

    @Field(() => [FormationSessionCreateWithoutFormationInput], {nullable:true})
    create?: Array<FormationSessionCreateWithoutFormationInput>;

    @Field(() => [FormationSessionCreateOrConnectWithoutFormationInput], {nullable:true})
    connectOrCreate?: Array<FormationSessionCreateOrConnectWithoutFormationInput>;

    @Field(() => FormationSessionCreateManyFormationInputEnvelope, {nullable:true})
    createMany?: FormationSessionCreateManyFormationInputEnvelope;

    @Field(() => [FormationSessionWhereUniqueInput], {nullable:true})
    connect?: Array<FormationSessionWhereUniqueInput>;
}
