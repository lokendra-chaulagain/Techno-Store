import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  productName!: string;

  @Column({ type: String })
  productDescription!: string;

  @Column({ type: String })
  categoryName!: string;

  @Column({ type: Number })
  priceNow!: number;

  @Column({ type: Number })
  pricePrevious!: number;

  @Column({ type: String })
  image!: string;

  @Column({ default: false, type: Boolean })
  isActive!: boolean;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;

  @UpdateDateColumn({ type: Date })
  updatedAt!: Date;
}
