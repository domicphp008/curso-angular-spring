import { CoursesService } from './../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private CoursesService: CoursesService) {
    //this.courses = [];
    //this.coursesServices = new CoursesService();

  }

  ngOnInit(): void {
    this.courses = this.CoursesService.list();
  }

}
