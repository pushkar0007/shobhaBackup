import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public _album : any;
  nameOfStudents: string[];

  videoGallery = [
    {
      modalTitle : 'Vid-01 title',
      modalFooter: 'Vid 1',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      image: 'https://i.ytimg.com/vi/dWYefOyiYVU/hqdefault.jpg',
      videoUrl : 'https://www.youtube.com/watch?v=dWYefOyiYVU'
    },
    {
      modalTitle : 'Vid-02 title',
      modalFooter: 'Vid 2',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      image: 'https://i.ytimg.com/vi/dWYefOyiYVU/hqdefault.jpg',
      videoUrl : 'https://www.youtube.com/watch?v=dWYefOyiYVU'
    }
  ]

  constructor (){  
       

  } 

  ngOnInit(){
      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
          event.preventDefault();
          $(this).ekkoLightbox();
      });



  }

}
