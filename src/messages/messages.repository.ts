import { readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8'); //json file တွေက pure string တွေဖြစ်
    const messages = JSON.parse(content); 
  }
  async findAll() {}
  async create(message: string) {}
}
