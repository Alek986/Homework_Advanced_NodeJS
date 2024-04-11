import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { budgetModule } from './budget/budget.module';

@Module({
  imports: [budgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
