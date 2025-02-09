import { Component, input, output } from "@angular/core";
import { Course } from "./model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  readonly course = input<Course>();
  courseSelected = output<Course>();

  onCourseViewed() {
    console.log("kespa");
    this.courseSelected.emit(this.course());
  }
}
