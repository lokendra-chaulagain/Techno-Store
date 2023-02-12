import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  name!: string;

  @Column({ type: String })
  description!: string;

  @Column({ type: Number,nullable: true })
  categoryId!: number;

  @Column({ type: Number })
  priceNow!: number;

  @Column({ type: Number })
  pricePrevious!: number;

  @Column({ type: String })
  image!: string;

  @Column({ type: String, nullable: true })
  isActive!: string;

  @Column({ type: String, nullable: true })
  isBestSeller!: string;

  @Column({ type: String, nullable: true })
  isFeatured!: string;

  @Column({ type: String, nullable: true })
  isHotSale!: string;

  @Column({ type: String, nullable: true })
  isRecent!: string;

  @Column({ type: String, nullable: true })
  isOutOfStock!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}
