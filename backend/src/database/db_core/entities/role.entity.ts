import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  nom: string;

  @OneToMany(() => Utilisateur, utilisateur => utilisateur.role)
  utilisateurs: Utilisateur[];
}
