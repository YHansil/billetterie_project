import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Spectacle } from './spectacle.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  @JoinColumn({ name: 'utilisateur_id' })
  utilisateur: Utilisateur;

  @ManyToOne(() => Spectacle, spectacle => spectacle.reservations)
  @JoinColumn({ name: 'spectacle_id' })
  spectacle: Spectacle;

  @Column()
  quantite: number;

  @Column({ length: 5, nullable: true })
  emplacement: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  montant_total: number;

  @CreateDateColumn({ name: 'date_reservation' })
  dateReservation: Date;
}
