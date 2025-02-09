import { Component, computed, input, output } from "@angular/core";
import { Course } from "./model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  readonly course = input<Course>();
  courseSelected = output<Course>();
  readonly index = input.required<number>();

  isIconUrl = computed(() => {
    return this.course().iconUrl && this.course();
  });

  onCourseViewed() {
    console.log("kespa");
    this.courseSelected.emit(this.course());
  }
}
