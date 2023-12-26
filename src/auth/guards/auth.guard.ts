import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IncomingHttpHeaders } from 'http';
import { JWT_SECRET } from '../constants';
import { IS_PUBLIC } from '../decorators/public';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const isPublic = this.reflector.get<boolean>(
            IS_PUBLIC,
            context.getHandler(),
        );

        if (isPublic) {
            return true;
        }

        const token = this.extractTokenFromHeader(req);

        if (!token) {
            throw new UnauthorizedException('Token not found');
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: JWT_SECRET,
            });

            req['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const headers = request.headers as unknown as IncomingHttpHeaders;

        const [type, token] = headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
