import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  @ViewChild('angularCropper',null) public angularCropper: CropperComponent;
//http://www.gstatic.com/webp/gallery/1.jpg
  //imageUrl = 'http://homepages.cae.wisc.edu/~ece533/images/airplane.png';
  imageUrl = './../../assets/airplaneTest.png';
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
    //cropmove: this.cropMoved.bind(this),
    crop: this.cropImage.bind(this),
    checkCrossOrigin: true
  };
  imgUrl: string;
  constructor() {
    this.imageUrl = './../../assets/images/airplaneTest.png';
    this.data = {};
   }

  ngOnInit() {
    // this.imgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.data.image = './../../assets/images/airplaneTest.png';
    };
    cropMoved(data){
      // this.imgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }
    cropImage(data) {
      this.data.image = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');

    }
    zoomImage() {
      this.angularCropper.cropper.zoom(0.1);
      this.data.image = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
      
    }
}


