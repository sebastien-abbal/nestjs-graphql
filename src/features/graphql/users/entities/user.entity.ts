import { UserRole } from '@types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', length: 500 })
  firstName: string;

  @Column({ type: 'text', length: 500 })
  lastName: string;

  @Column({ type: 'text', length: 500 })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ type: 'text', length: 50, nullable: true })
  phoneIndex?: string;

  @Column({ type: 'text', length: 50, nullable: true })
  phoneNumber?: string;

  @Column({ type: 'boolean', default: false })
  isPhoneVerified: boolean;

  @Column({ type: 'boolean', default: false })
  isEmailVerified: boolean;

  @Column({ type: 'date', default: new Date() })
  lastLoginAt: Date;

  @Column({ type: 'date', default: new Date() })
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  updatedAt?: Date;

  @Column({ type: 'date', nullable: true })
  deletedAt?: Date;
}
