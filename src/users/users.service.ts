import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Marius' },
    { id: 3, name: 'peter' },
    { id: 4, name: 'marco' },
    { id: 5, name: 'polo' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((u) => u.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((u) => u.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  // deleteUser(userId: number): any {
  //   return this.users.pop(this.findById());
  // }

  // editUser(userId: number): User {
  //   const user: User = this.users.find((u) => u.id === userId);
  //   this.findById(userid) = user;
  //   return user;
  // }
}
