import { Component, OnInit } from '@angular/core';
declare var UIkit: any;
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  showImageCropperModal = false;
  constructor() { }

  ngOnInit() {
     var bar = document.getElementById('js-progressbar') as HTMLInputElement;
     bar.max = '';
     bar.value = '';

     UIkit.upload('.js-upload', {

        url: '',
        multiple: true,

        beforeSend() {
            console.log('beforeSend', arguments);
        },
        beforeAll() {
            console.log('beforeAll', arguments);
        },
        load() {
            console.log('load', arguments);
        },
        error() {
            console.log('error', arguments);
        },
        complete() {
            console.log('complete', arguments);
        },

        loadStart(e) {
            console.log('loadStart', arguments);

            bar.removeAttribute('hidden');
            bar.max = e.total;
            bar.value = e.loaded;
        },

        progress(e) {
            console.log('progress', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        loadEnd(e) {
            console.log('loadEnd', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
            this.showImageCropperModal = true;
            var modal = UIkit.modal("#image-cropper-modal");
            modal.show();
        },

        completeAll() {
            console.log('completeAll', arguments);

            setTimeout(() => {
                this.bar.setAttribute('hidden', 'hidden');
            }, 1000);

            alert('Upload Completed');
        }

    });
  }

}
