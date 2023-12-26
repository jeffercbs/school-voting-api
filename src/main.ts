import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from './auth/guards/roles.guard';
import helmet from 'helmet';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const reflector = app.get(Reflector);
    const jwtService = app.get(JwtService);

    app.useGlobalGuards(new AuthGuard(jwtService, reflector));
    app.useGlobalGuards(new RolesGuard(reflector));
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    });
    app.enableCors({
        origin: '*',
    });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    app.use(helmet());
    await app.listen(PORT, HOST, () =>
        console.log(`Server is running on http://${HOST}:${PORT}`),
    );
}
bootstrap();
