import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            idLabel: 'id',
            ceLabel: 'ce',
        });
    }

    async validate(id: string, ce: string): Promise<any> {
        const user = await this.authService.validate(id, ce);

        if (!user) throw new UnauthorizedException();
        return user;
    }
}
