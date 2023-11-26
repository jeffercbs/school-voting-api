import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from 'src/colleges/entities/college.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, College])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
