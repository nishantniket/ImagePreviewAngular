import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
declare var UIkit: any;
@Component({
  selector: 'app-profile-image-cropper',
  templateUrl: './profile-image-cropper.component.html',
  styleUrls: ['./profile-image-cropper.component.css']
})
export class ProfileImageCropperComponent implements OnInit {

  data: any;
  config = {
    aspectRatio : 16/9,
    dragMode : 'move',
    background : true,
    movable: true,
    rotatable : true,
    scalable: true,
    zoomable: true,
    viewMode: 1,
    checkImageOrigin : true,
    cropmove: this.cropMoved.bind(this),
    //crop: this.cropImage.bind(this),
    checkCrossOrigin: true
  };
  @ViewChild('angularCropper', null) public angularCropper: CropperComponent;
  constructor() {
    this.data = {};
    this.data.image =  './../../assets/airplaneTest.png';
  }

  ngOnInit() {
  }

  cropMoved(data) {
     this.data.image = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
  }

  //UIkit.modal('#modal-id').toggle()

}
