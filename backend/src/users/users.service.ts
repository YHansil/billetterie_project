import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from '../database/db_core/entities/utilisateur.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Utilisateur, 'core') // ou ton nom de connection
    private userRepo: Repository<Utilisateur>,
  ) {}

  create(userData: CreateUserDto) {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }
}
