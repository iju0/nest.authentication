import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'John',
      password: 'changeName',
    },
    {
      userId: 1,
      username: 'Jung',
      password: 'wjdwndud',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    console.log('3. user service...');
    return this.users.find((user) => user.username === username);
  }
}
