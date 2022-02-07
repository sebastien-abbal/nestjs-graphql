import { UserRole } from '@features/graphql/users/types';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

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

  @Column({ type: 'enum', enum: UserRole, array: true, default: ['USER'] })
  @Field(() => [UserRole], { complexity: 2 })
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

  @Column({ type: 'date', default: () => 'NOW()' })
  @Field(() => Date)
  lastLoginAt: Date;

  @Column({ type: 'date', default: () => 'NOW()' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
