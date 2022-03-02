import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolCreateWithoutFormationsInput } from './school-create-without-formations.input';

@InputType()
export class SchoolCreateOrConnectWithoutFormationsInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutFormationsInput, {nullable:false})
    create!: SchoolCreateWithoutFormationsInput;
}
