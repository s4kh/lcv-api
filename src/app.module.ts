import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
