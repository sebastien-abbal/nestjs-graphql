import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutFormationsInput } from './school-create-without-formations.input';
import { SchoolCreateOrConnectWithoutFormationsInput } from './school-create-or-connect-without-formations.input';
import { SchoolUpsertWithWhereUniqueWithoutFormationsInput } from './school-upsert-with-where-unique-without-formations.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithWhereUniqueWithoutFormationsInput } from './school-update-with-where-unique-without-formations.input';
import { SchoolUpdateManyWithWhereWithoutFormationsInput } from './school-update-many-with-where-without-formations.input';
import { SchoolScalarWhereInput } from './school-scalar-where.input';

@InputType()
export class SchoolUncheckedUpdateManyWithoutFormationsInput {

    @Field(() => [SchoolCreateWithoutFormationsInput], {nullable:true})
    create?: Array<SchoolCreateWithoutFormationsInput>;

    @Field(() => [SchoolCreateOrConnectWithoutFormationsInput], {nullable:true})
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutFormationsInput>;

    @Field(() => [SchoolUpsertWithWhereUniqueWithoutFormationsInput], {nullable:true})
    upsert?: Array<SchoolUpsertWithWhereUniqueWithoutFormationsInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    set?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    disconnect?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    delete?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolWhereUniqueInput], {nullable:true})
    connect?: Array<SchoolWhereUniqueInput>;

    @Field(() => [SchoolUpdateWithWhereUniqueWithoutFormationsInput], {nullable:true})
    update?: Array<SchoolUpdateWithWhereUniqueWithoutFormationsInput>;

    @Field(() => [SchoolUpdateManyWithWhereWithoutFormationsInput], {nullable:true})
    updateMany?: Array<SchoolUpdateManyWithWhereWithoutFormationsInput>;

    @Field(() => [SchoolScalarWhereInput], {nullable:true})
    deleteMany?: Array<SchoolScalarWhereInput>;
}
