import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserAvatarPicture {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => MediaProvider, {nullable:false,defaultValue:'AWS'})
    provider!: keyof typeof MediaProvider;

    @Field(() => MediaStatus, {nullable:false,defaultValue:'UPLOADING'})
    status!: keyof typeof MediaStatus;

    @Field(() => Int, {nullable:true})
    size!: number | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userID!: string;
}
