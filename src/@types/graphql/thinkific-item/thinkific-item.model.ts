import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { FormationSession } from '../formation-session/formation-session.model';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ThinkificItem {

    @Field(() => ID, {nullable:false})
    thinkificID!: string;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => String, {nullable:false})
    createdByID!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    session?: FormationSession;

    @HideField()
    sessionID!: string;
}
