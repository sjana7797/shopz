import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers() {
    return [
      {
        user: 1,
        name: 'gg',
      },
      {
        user: 2,
        name: 'hh',
      },
    ];
  }
}
