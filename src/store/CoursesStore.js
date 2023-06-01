import { observable, action, computed, makeObservable } from "mobx";

class CoursesStore {
  courses = [];
  singleCourse = null;

  constructor() {
    makeObservable(this, {
      courses: observable,
      setCourses: action,
      setCourse: action,
      coursesLength: computed,
      getCourseById: action,
    });
  }

  setCourses = (courses) => {
    this.courses = courses;
  };
  setCourse = (course) => {
    this.courses.push(course);
  };
  get coursesLength() {
    return this.courses.length;
  }
  /* korisitit sa getCourseById(id) ili course na SingleCourse
  getCourseById = (id) => {
    return this.courses.find((course) => course.id === Number(id));
  };*/
  getCourseById = (id) => {
    this.singleCourse = this.courses.find((course) => course.id === Number(id));
  };
}
const coursesStore = new CoursesStore();
export default coursesStore;
