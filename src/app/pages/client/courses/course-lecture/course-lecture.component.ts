import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseVideo } from 'src/app/model/course-video.model';
import { CoursesService } from 'src/app/services/courses.service';
import { MetaService } from 'src/app/services/meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-lecture',
  templateUrl: './course-lecture.component.html',
  styleUrls: ['./course-lecture.component.scss']
})
export class CourseLectureComponent {

  thumb:any;
  videoId: any;
  height: any = 500;
  width: any = 950;
  imgUrl: any = environment.imgUrl;
  course: CourseVideo[] = [
    {
      vId: 0,
      v_title: '',
      v_description: '',
      v_url: '',
      url: '',
      thumbnail: '',
      date: '',
      status: true,
      courses: {
        cId: 0,
        url: '',
        title: '',
        description: '',
        thumbnail: ''
      }
    }
  ];
  apiLoaded: any = false;
  loader: any = false;
  spinner: boolean = false;
  vid: any;
  courseData: any = {
    courses: {
      title: ''
    }
  };
  questions: any;
  cid: any;

  constructor(private _courses: CoursesService, 
    private _snackbar: MatSnackBar, 
    private _route: ActivatedRoute,
     private _router: Router, 
     private _meta:Meta, 
     private _title:Title,
     private shareService:MetaService,
     @Inject(PLATFORM_ID) private platformId: Object
     ) { }

  ngOnInit(): void {
    this.vid = this._route.snapshot.params['id'];
    this.cid = this._route.snapshot.params['cid'];
    // if (window.innerWidth < 600) {
    //   this.width = window.innerWidth - 70;
    //   this.height = window.innerHeight - 430;
    // }
    // else if (window.innerWidth < 600) {
    //   this.width = window.innerWidth - 70;
    //   this.height = window.innerHeight - 430;
    // }
    // else {
    //   this.width = window.innerWidth - 600;
    //   this.height = window.innerHeight - 200;
    // }
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    // console.log(this.width);
    // console.log(this.height);
    if (isPlatformBrowser(this.platformId)) {
      this.getCourseById(this.vid);
      this.getAllVideoOfCourse();
    }
  }
  getAllVideoOfCourse() {
    this._courses.getAllActiveCourseVideo(this.cid).subscribe(
      (data: CourseVideo[]) => {
        this.course = data;
        this.shareService.setFacebookTags(
          window.document.location.href,
          this.course[0].v_title,
          this.course[0].v_description,
          this.course[0].thumbnail);
        if (this.course.length != 0) {
          this.loader = true;
        }
        else{
          this.loader = false;
        }
        this.spinner = true;
      },
      (error: any) => {
        console.log(error);
        // Swal.fire('Error', 'Error in loading data', 'error');
      }
    )
  }
  getCourseById(vid: any) {
    this._courses.getCourseVideoById(vid).subscribe(
      (res: CourseVideo) => {
        this.courseData = res;

        this.shareService.setFacebookTags(
          window.document.location.href,
          this.courseData.v_title,
          this.courseData.courses.description,
          this.courseData.thumbnail);
          
        // this.thumb = this.imgUrl + this.course.thumbnail;
        this._title.setTitle(this.courseData.v_title);
        // this._meta.updateTag({property:'og:title', content: this.course.v_title});
        // this._meta.updateTag({name:'description',content: this.course.courses.description});
        // this._meta.updateTag({property:'og:description',content: this.course.courses.description});
        // this._meta.updateTag({property:'og:image', content: this.thumb});  
        // this._meta.updateTag({property:'og:image:secure_url', content: this.thumb});
        // this._meta.updateTag({property:'og:image:type', content: "image/jpeg/png"});
        // this._meta.updateTag({property:'og:image:width', content: "400"});
        // this._meta.updateTag({property:'og:image:height', content:"300"});
        // this._meta.updateTag({property:'og:url', content: window.document.location.href});
        // this._meta.updateTag({name:'keywords',content:'top free courses, courses'});  

        this.videoId = this.courseData.url;
        this.spinner = true;
        if (this.course.length == 0 || this.course == undefined) {
          this.loader = true;
        }
      })

  }
  onVideo(title: any, vId: any, index: any) {
    this._router.navigate(['/course-lectures/' + title + "/" + this.cid + '/' + vId]);
    this.getCourseById(vId);
    // console.log(vId);
    // this.onActive(index);  
  }
  onActive(index: any) {
    var x = document.getElementById("list" + index);
    const id = index;
    if (id != index) {
      x?.classList.toggle('active');
    }
    if (id == index) {
      var y = document.getElementById("list" + index);
      console.log(y);

      x?.classList.remove('active');
    }
    if (x?.className == "list") {
      x.className += (" active");
    }
    else if (x?.className == "list active") {
      x.classList.remove("active");
    }
    console.log(x);
    // else {
    //   x?.className == "row topnav";
    // }
  }
}
