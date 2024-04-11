import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Hashing, isHashValid } from 'src/utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const ishashed = await isHashValid(pass, user.password);
    if (!ishashed) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, email: user.email, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async signIn(email: string, pass: string): Promise<any> {
    try {
      const password: string = await Hashing(pass);
      await this.userService.create({ email, password });
      return {
        message: 'User created',
      };
    } catch (e) {
      throw new ConflictException();
    }
  }
}
