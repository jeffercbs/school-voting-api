import { Module } from '@nestjs/common';
import { VotingsService } from './votings.service';
import { VotingsController } from './votings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voting } from './entities/voting.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Voting])],
    controllers: [VotingsController],
    providers: [VotingsService],
    exports: [VotingsService],
})
export class VotingsModule {}
