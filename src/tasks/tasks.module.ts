import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';
import { Task } from './shared/task';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Task',schema:TaskSchema}])
    ],
    controllers:[TasksController],
    providers:[TaskService]
})
export class TasksModule {}
