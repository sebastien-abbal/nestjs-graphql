import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutFormationsInput } from './school-create-without-formations.input';
import { SchoolCreateOrConnectWithoutFormationsInput } from './school-create-or-connect-without-formations.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedManyWithoutFormationsInput {

    @Field(() => [SchoolCreateWithoutFormationsInput], {nullable:true})
    create?: Array<SchoolCreateWithoutFormationsInput>;

    @Field(() => [SchoolCreateOrConnectWithoutFormationsInput], {nullable:true})
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutFormationsInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolWhereUniqueInput>;
}
