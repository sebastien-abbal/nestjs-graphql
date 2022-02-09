import { BaseEntityTemplate } from '@features/database/templates';
import { UserAvatar } from '@features/graphql/user/entities';
import { UserAvatarService } from '@features/graphql/user/services';
import { UserLocale, UserRole } from '@features/graphql/user/types';
import {
  Field,
  ObjectType,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User extends BaseEntityTemplate {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string;

  @Column('text')
  @Field(() => String)
  firstName: string;

  @Column('text')
  @Field(() => String)
  lastName: string;

  @Column('text')
  @Field(() => String)
  email: string;

  @Column('text')
  password: string;

  @Column({ type: 'enum', enum: UserLocale, default: UserLocale.EN })
  @Field(() => UserLocale)
  locale: UserLocale;

  @Column({
    type: 'enum',
    enum: UserRole,
    array: true,
    default: [UserRole.USER],
  })
  @Field(() => [UserRole])
  roles: UserRole[];

  @Column('text', { nullable: true })
  @Field(() => String, { nullable: true })
  phoneIndex?: string;

  @Column('text', { nullable: true })
  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  isPhoneVerified: boolean;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  isEmailVerified: boolean;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  @Field(() => Date)
  lastLoginAt: Date;

  @OneToMany(() => UserAvatar, (avatar) => avatar.user)
  avatars: UserAvatar[];
}

@Resolver(() => User)
export class UserEntityResolver {
  constructor(private userAvatarService: UserAvatarService) {}

  @ResolveField('avatar', () => UserAvatar, { nullable: true })
  async avatar(@Parent() parentUser: User) {
    return this.userAvatarService.getUserAvatar({ userID: parentUser.id });
  }
}
