import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Reservation } from './reservation.entity';

@Entity()
export class Spectacle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  titre: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  date_spectacle: Date;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  prix: number;

  @CreateDateColumn({ name: 'date_creation' })
  dateCreation: Date;

  @OneToMany(() => Reservation, reservation => reservation.spectacle)
  reservations: Reservation[];
}
