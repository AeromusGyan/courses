import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './auth/client.guard';
import { AboutComponent } from './pages/client/about/about.component';
import { ResumeComponent } from './pages/client/about/resume/resume.component';
import { ClientComponent } from './pages/client/client.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { CourseDetailsComponent } from './pages/client/courses/course-details/course-details.component';
import { CourseLectureComponent } from './pages/client/courses/course-lecture/course-lecture.component';
import { CoursesComponent } from './pages/client/courses/courses.component';
import { ErrorComponent } from './pages/client/error/error.component';
import { LoginComponent } from './pages/client/login/login.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { SignupComponent } from './pages/client/signup/signup.component';

const routes: Routes = [
    {path:'', component:ClientComponent, pathMatch: 'full' },
    {path:'home', component:ClientComponent},
    {path:'courses', component:CoursesComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'course-details/:title/:cid', component:CourseDetailsComponent},
    {path:'myresume', component: ResumeComponent},
    {path:'course-lectures/:title/:cid/:id', component: CourseLectureComponent, canActivate: [ClientGuard]},
    {path:'profile', component: ProfileComponent, canActivate: [ClientGuard]},

    {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
