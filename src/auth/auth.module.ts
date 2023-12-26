import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
// entities
import { SchoolsModule } from 'src/schools/schools.module';
import { UsersModule } from 'src/users/users.module';
// constants
import { JWT_SECRET } from './constants';

@Module({
    imports: [
        UsersModule,
        SchoolsModule,
        JwtModule.register({
            global: true,
            secret: JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
