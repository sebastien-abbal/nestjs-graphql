import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationCreateManyHeadMasterInput } from './formation-create-many-head-master.input';

@InputType()
export class FormationCreateManyHeadMasterInputEnvelope {

    @Field(() => [FormationCreateManyHeadMasterInput], {nullable:false})
    data!: Array<FormationCreateManyHeadMasterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
