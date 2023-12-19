import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 4321;
const HOST = process.env.HOST || '0.0.0.0';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: '*',
    });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    await app.listen(PORT, HOST, () =>
        console.log(`Server is running on http://${HOST}:${PORT}`),
    );
}
bootstrap();
