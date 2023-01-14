import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  formData!: FormData;

  constructor(private http:HttpClient) { }
  private baseUrl:string = environment.baseUrl;

  addMember(member:any){
    return this.http.post(`${this.baseUrl}/user/`,member)
  }
  getAllMember(){
    return this.http.get(`${this.baseUrl}/user/`);
  }
  getMemberByEmail(email:any){
    return this.http.get(`${this.baseUrl}/user/update/`+email);
  }
  updatePassword(userData:any){
    return this.http.put(`${this.baseUrl}/user/update/password`,userData);
  }

  postFile(api:any,fileToUpload:File){
    const endpoint = `https://sciaku.com/exam.ashx`;
    const formData : FormData = new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('apiid',api);
    return this.http.post(endpoint,formData);
  }

  updateProfile(userData:any){
    return this.http.put(`${this.baseUrl}/user/update`,userData);
  }
  deleteUser(id:number){
    return this.http.delete(`${this.baseUrl}/user/`+ id);
  }

  imageUpload(data:any, file:File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    const req = new HttpRequest('POST', `${this.baseUrl}/file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  // getImageFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/file/files`);
  // }



  
  // update(formData: FormData){
  //   // console.log(file);
  //   // console.log(member);
    
  //   // const formData = new FormData();
  //   // formData.append('member',member);
  //   // formData.append('image',file);

  //   const req = new HttpRequest('PUT', `${this.baseUrl}/user/update`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  //   return this.http.request(req);
  //   // return this.http.put(`${this.baseUrl}/user/update/`,userData);
  // }



}
