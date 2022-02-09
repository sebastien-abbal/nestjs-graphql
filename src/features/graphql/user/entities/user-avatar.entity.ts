import { PictureEntityTemplate } from '@features/database/templates';
import { User } from '@features/graphql/user/entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'user-avatars' })
export class UserAvatar extends PictureEntityTemplate {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string;

  @ManyToOne(() => User, (user) => user.avatars)
  user: User;
}
