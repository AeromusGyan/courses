import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseVideo } from 'src/app/model/course-video.model';
import { CoursesService } from 'src/app/services/courses.service';
import { MetaService } from 'src/app/services/meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  imgUrl: any = environment.imgUrl;
  cid: any;
  thumb: any;

  constructor(
    private _courses: CoursesService,
    // private imageService:ImageProcessingService,
    private _snackbar:MatSnackBar, 
    private _route: ActivatedRoute,
    private _meta: Meta,
    private _title: Title,
    private shareService: MetaService
  ) { }
  panelOpenState = false;
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
  loader: any = false;
  spinner: any = false;

  ngOnInit(): void {
    this.cid = this._route.snapshot.params['cid'];
    this.getAllCourses();
  }

  getAllCourses() {
    this._courses.getAllActiveCourseVideo(this.cid)
      // .pipe(
      //   map((x:CourseVideo[], i) => x.map((course:CourseVideo) => this.imageService.createCourseVideosImages(course)))
      // )
      .subscribe(
        (res: CourseVideo[]) => {
          this.course = res;
          // console.log(res);
          this.shareService.setFacebookTags(
            window.document.location.href,
            this.course[0].courses.title,
            this.course[0].courses.description,
            this.course[0].courses.thumbnail);

          // this.thumb = this.imgUrl +'/'+ this.course[0].thumbnail;
          this._title.setTitle(this.course[0].courses.title);
          // this._meta.updateTag({property:'og:title', content: this.course[0].courses.title});
          // this._meta.updateTag({name:'description',content: this.course[0].courses.description});
          // this._meta.updateTag({property:'og:description',content: this.course[0].courses.description});
          // this._meta.updateTag({property:'og:image', content: this.thumb});  
          // this._meta.updateTag({property:'og:image:secure_url', content: this.thumb});
          // this._meta.updateTag({property:'og:image:type', content: "image/jpeg/png"});
          // this._meta.updateTag({property:'og:image:width', content: "400"});
          // this._meta.updateTag({property:'og:image:height', content:"300"});
          // this._meta.updateTag({name:'url', content: window.document.location.href});
          // this._meta.updateTag({property:'og:url', content: window.document.location.href});
          this._meta.updateTag({ name: 'keywords', content: 'top free courses, courses' + this.course[0].courses.title });

          this.spinner = true;
          if (this.course.length != 0) {
            this.loader = true;
          }
          else {
            this.loader = false;
          }
        },
        (error: any) => {
          console.error(error);
          this._snackbar.open('Error in loading data !!','Close',{
            duration:2000,
          });
          // Swal.fire('Error','Error in loading data','error');
        }
      )
  }
}