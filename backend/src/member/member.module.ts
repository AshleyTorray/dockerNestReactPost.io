import { Module } from '@nestjs/common';
import LoginModule from 'src/auth/login/login.module';
import RegisterEntity from 'database/entities/register.entity';
import CommentEntity from 'database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import LoanModule from './loan/loan.module';
import MemberController from './member.controller';
import MemberService from './member.service';
import MemberActionsService from './member.comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterEntity, CommentEntity]),
    LoginModule,
    LoanModule,
  ],
  controllers: [MemberController],
  exports: [LoginModule],
  providers: [MemberService, MemberActionsService],
})
export default class MemberModule {}
