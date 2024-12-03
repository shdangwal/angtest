import { TestBed } from '@angular/core/testing';
import { UserService } from './usersRxjs.service';
import { UserInterface } from '../types/user.interface';

describe('UserService', () => {
  let userService: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    userService = TestBed.inject(UserService);
  });

  it('creates a service', () => {
    expect(userService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add user', () => {
      const user: UserInterface = {
        id: '3',
        name: 'foo',
      };
      userService.addUser(user);
      expect(userService.users$.getValue()).toEqual([{ id: '3', name: 'foo' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove user', () => {
      userService.users$.next([{ id: '3', name: 'foo' }]);
      userService.removeUser('3');
      expect(userService.users$.getValue()).toEqual([]);
    });
  });
});
