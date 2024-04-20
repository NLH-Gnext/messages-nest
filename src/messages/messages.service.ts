import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class messagesService {
  // messagesRepo: MessagesRepository;

  constructor(public messagesRepo: MessagesRepository) {
    //service is creating it's own repositories
    //Don't do this on real apps
    // this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
