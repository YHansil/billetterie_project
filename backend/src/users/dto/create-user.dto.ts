export class CreateUserDto {
  nom: string;
  prenom: string;
  email: string;
  identifiant?: string;
  mot_de_passe: string;
  role_id: number;
}
