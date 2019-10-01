import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { ProfileImageCropperComponent } from './profile-image-cropper/profile-image-cropper.component';
@NgModule({
  declarations: [
    AppComponent,
    ImageCropperComponent,
    UploadFormComponent,
    FileUploaderComponent,
    ProfileImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AngularCropperjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
