import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutFormationsInput } from './school-update-without-formations.input';

@InputType()
export class SchoolUpdateWithWhereUniqueWithoutFormationsInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutFormationsInput, {nullable:false})
    data!: SchoolUpdateWithoutFormationsInput;
}
