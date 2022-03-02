import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutFormationsInput } from './school-update-without-formations.input';
import { SchoolCreateWithoutFormationsInput } from './school-create-without-formations.input';

@InputType()
export class SchoolUpsertWithWhereUniqueWithoutFormationsInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutFormationsInput, {nullable:false})
    update!: SchoolUpdateWithoutFormationsInput;

    @Field(() => SchoolCreateWithoutFormationsInput, {nullable:false})
    create!: SchoolCreateWithoutFormationsInput;
}
