import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from '../../dist/user/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ){}

  async getUserByEmail(email: string) {
    return this.userModel.findOne( { email } ).exec();
  }

  async register(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    const user = await this.getUserByEmail(createUserDto.email);
  }
}