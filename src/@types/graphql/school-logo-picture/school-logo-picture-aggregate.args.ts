import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';
import { SchoolLogoPictureOrderByWithRelationInput } from './school-logo-picture-order-by-with-relation.input';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SchoolLogoPictureCountAggregateInput } from './school-logo-picture-count-aggregate.input';
import { SchoolLogoPictureAvgAggregateInput } from './school-logo-picture-avg-aggregate.input';
import { SchoolLogoPictureSumAggregateInput } from './school-logo-picture-sum-aggregate.input';
import { SchoolLogoPictureMinAggregateInput } from './school-logo-picture-min-aggregate.input';
import { SchoolLogoPictureMaxAggregateInput } from './school-logo-picture-max-aggregate.input';

@ArgsType()
export class SchoolLogoPictureAggregateArgs {

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    where?: SchoolLogoPictureWhereInput;

    @Field(() => [SchoolLogoPictureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SchoolLogoPictureOrderByWithRelationInput>;

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:true})
    cursor?: SchoolLogoPictureWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SchoolLogoPictureCountAggregateInput, {nullable:true})
    _count?: SchoolLogoPictureCountAggregateInput;

    @Field(() => SchoolLogoPictureAvgAggregateInput, {nullable:true})
    _avg?: SchoolLogoPictureAvgAggregateInput;

    @Field(() => SchoolLogoPictureSumAggregateInput, {nullable:true})
    _sum?: SchoolLogoPictureSumAggregateInput;

    @Field(() => SchoolLogoPictureMinAggregateInput, {nullable:true})
    _min?: SchoolLogoPictureMinAggregateInput;

    @Field(() => SchoolLogoPictureMaxAggregateInput, {nullable:true})
    _max?: SchoolLogoPictureMaxAggregateInput;
}
