import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IncomingHttpHeaders } from 'http';
import { JWT_SECRET } from '../constants';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

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
