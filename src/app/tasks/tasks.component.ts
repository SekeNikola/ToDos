import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ transform: "translateX(-1500px)" }),
        animate(500)
      ]),
      transition("* => void", [
        animate(500, style({ transform: "translatey(-1000px)" }))
      ])
    ]),
  ]
})
export class TasksComponent implements OnInit {
 itemCount: number;
 btnText: string =  "+";
 goalText: string;
 goals = []


  constructor() {}

  ngOnInit() {
    this.goals = JSON.parse(localStorage.getItem("todo"));
    this.itemCount = this.goals.length;

  }

  addItem() {
   
    if (this.goalText == "") {
      return false;
    } else {
      this.goals.push(this.goalText);
      localStorage.setItem("todo", JSON.stringify(this.goals));
      this.goalText = "";
      this.itemCount = this.goals.length;
    
  }
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(this.goals));
    this.itemCount--;
  }
}
