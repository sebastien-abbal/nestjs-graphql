import { MediaProvider, MediaStatus } from '@features/database/types';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class AudioEntityTemplate {
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

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  duration?: number;

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
