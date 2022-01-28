import { UserRole } from '@features/graphql/users/users.enums';
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
  @Field(() => String)
  password: string;

  @Column({ enum: UserRole, default: 'USER' })
  @Field(() => UserRole)
  role: UserRole;

  @Column('text', { nullable: true })
  @Field(() => String)
  phoneIndex?: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  phoneNumber?: string;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  isPhoneVerified: boolean;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  isEmailVerified: boolean;

  @Column({ type: 'date', default: new Date() })
  @Field(() => Date)
  lastLoginAt: Date;

  @Column({ type: 'date', default: new Date() })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date)
  updatedAt?: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date)
  deletedAt?: Date;
}
