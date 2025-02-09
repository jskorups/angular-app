import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./course-card/model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  onCourseSelected(course: Course) {
    console.log("App component clicked", course);
  }
  course1 = COURSES[0];
  course2 = COURSES[1];
  course3 = COURSES[2];
}
