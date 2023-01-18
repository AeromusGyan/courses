import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { AboutComponent } from './pages/client/about/about.component';
import { ClientComponent } from './pages/client/client.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { CourseDetailsComponent } from './pages/client/courses/course-details/course-details.component';
import { CourseLectureComponent } from './pages/client/courses/course-lecture/course-lecture.component';
import { CoursesComponent } from './pages/client/courses/courses.component';
import { ErrorComponent } from './pages/client/error/error.component';
import { LoginComponent } from './pages/client/login/login.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileComponent } from './pages/client/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClientComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CourseLectureComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
