import { Injectable } from '@nestjs/common';
import { genUUID } from 'helpers/gen-uuid.helper';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user: UserDto = {
      ...createUserDto,
      id: genUUID(),
    };
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    return this.users;
  }

  async findOne(id: UserDto['id']): Promise<UserDto | undefined> {
    return this.users.find((u) => u.id === id);
  }

  async update(
    id: UserDto['id'],
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto | undefined> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return undefined;
    this.users[index] = {
      ...this.users[index],
      ...updateUserDto,
    };
    return this.users[index];
  }

  async remove(id: UserDto['id']): Promise<UserDto | undefined> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return undefined;
    return this.users.splice(index, 1)[0];
  }
}
