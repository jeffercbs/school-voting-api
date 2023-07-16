import {
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import { Role } from './constant';

export class RoleGuard implements CanActivate {
    role: Role;

    constructor(role: Role) {
        this.role = role;
    }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (user.role !== this.role) throw new UnauthorizedException();
        return true;
    }
}
