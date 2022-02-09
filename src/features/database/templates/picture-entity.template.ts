import { MediaProvider, MediaStatus } from '@features/database/types';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class PictureEntityTemplate {
  @Column({ type: 'enum', enum: MediaProvider })
  @Field(() => MediaProvider)
  source: MediaProvider;

  @Column({ type: 'enum', enum: MediaStatus })
  @Field(() => MediaStatus)
  status: MediaStatus;

  @Column({ type: 'bigint', nullable: true })
  @Field(() => Int, { nullable: true })
  size?: number;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  fileToDeleteAt?: Date;

  @Column({ type: 'bigint', nullable: true })
  @Field(() => Int, { nullable: true })
  width?: number;

  @Column({ type: 'bigint', nullable: true })
  @Field(() => Int, { nullable: true })
  height?: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
