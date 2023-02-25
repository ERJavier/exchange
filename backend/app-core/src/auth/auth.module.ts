import { Module } from '@nestjs/common';
import { HashService } from 'src/user/hash.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { SessionSerializer } from './strategy/session.serializer';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../user/user.service';
import { UserSchema, User } from '../user/schemas/user.schema';


@Module({
    imports: [
        UserModule,
        PassportModule.register({session: true}),
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }])
    ],
    providers: [
        AuthService,
        LocalStrategy,
        SessionSerializer,
        HashService,
        UserService
    ]
})

export class AuthModule {}