import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
import { FormationSessionOrderByWithRelationInput } from '../formation-session/formation-session-order-by-with-relation.input';

@InputType()
export class GoogleCalendarItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    googleCalendarID?: keyof typeof SortOrder;

    @HideField()
    createdBy?: UserOrderByWithRelationInput;

    @HideField()
    createdByID?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    session?: FormationSessionOrderByWithRelationInput;

    @HideField()
    sessionID?: keyof typeof SortOrder;
}
