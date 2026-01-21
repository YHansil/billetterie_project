import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from './role.entity';
import { Reservation } from './reservation.entity';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_id: number;  // <-- important

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  identifiant: string;

  @Column()
  mot_de_passe: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creation: Date;

  @OneToMany(() => Reservation, reservation => reservation.utilisateur)
  reservations: Reservation[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.mot_de_passe.startsWith('$2b$')) {
      this.mot_de_passe = await bcrypt.hash(this.mot_de_passe, 10);
    }
  }
}
