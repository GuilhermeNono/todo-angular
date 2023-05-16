import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskArray = [
    {
      taskname: "Adicionar tarefas",
      isCompleted: false
    }
  ]

  onSubmit(taskForm: NgForm){
    this.taskArray.push(
      {
        taskname: taskForm.controls['task'].value,
        isCompleted: false
      }
    );
    taskForm.reset();
  }

  onDelete(i: number) {
    this.taskArray.splice(i, 1);
  }
  onCheck(i:number){
    this.taskArray[i].isCompleted = !this.taskArray[i].isCompleted
  }
}
