import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { DatabaseModule } from './database/database.module';
import { VideoController } from './video/video.controller';
import { VideoService } from './video/video.service';

@Module({
  imports: [VideoModule, DatabaseModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class AppModule {}
