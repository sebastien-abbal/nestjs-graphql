import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassCreateManyInput } from './formation-class-create-many.input';

@ArgsType()
export class CreateManyFormationClassArgs {

    @Field(() => [FormationClassCreateManyInput], {nullable:false})
    data!: Array<FormationClassCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
