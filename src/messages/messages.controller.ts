import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
import { messagesService } from './messages.service';

@Controller('messages') //controller = class decorator
export class MessagesController {
  messagesService: messagesService;
  constructor() {
    //Don't do this on real apps
    //Use DEPENDENCY INJECTION
    this.messagesService = new messagesService();
  }

  @Get() //get,post,etc = method decorator
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
    //body ,param = argument decorator
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException();
    }
    return message;
  }
}
