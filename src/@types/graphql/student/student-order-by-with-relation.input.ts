import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { FormationClassOrderByRelationAggregateInput } from '../formation-class/formation-class-order-by-relation-aggregate.input';

@InputType()
export class StudentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    user?: UserOrderByWithRelationInput;

    @HideField()
    userID?: keyof typeof SortOrder;

    @HideField()
    formationClasses?: FormationClassOrderByRelationAggregateInput;
}
