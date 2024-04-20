import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { messagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [messagesService, MessagesRepository],
})
export class MessagesModule {}
