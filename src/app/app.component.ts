import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel';
  bannerList: any = [];
  packageList: any = [];
  serviceList: any = [];
  galleryList: any = [];
  testimonalList: any = [];

  constructor(){
    this.bannerList = [
      {
        imgSrc: 'assets/imgs/slide6.jpg',
        imgName: 'Slide 6'
      },
      {
        imgSrc: 'assets/imgs/slide5.jpg',
        imgName: 'Slide 5'
      },
      {
        imgSrc: 'assets/imgs/slide1.jpg',
        imgName: 'Slide 1',
      },
      {
        imgSrc: 'assets/imgs/slide2.jpg',
        imgName: 'Slide 2',
      },
      {
        imgSrc: 'assets/imgs/slide3.jpg',
        imgName: 'Slide 3',
      },
      {
        imgSrc: 'assets/imgs/slide4.jpg',
        imgName: 'Slide 4',
      },
    ];

    // package list
    this.packageList = [
      {
        imgSrc: 'assets/imgs/slide4.jpg',
        imgName: 'test',
        tourName: 'Tours in Agra',
        tourDescp: 'Free your mind with our Mountains & Mystics tour. The beautiful Himalayan foothills are shadowed by ice-covered peaks of the high Himalayas. '
      },
      {
        imgSrc: 'assets/imgs/slide2.jpg',
        imgName: 'test',
        tourName: 'Tours in Goa',
        tourDescp: 'Visit Jaipur, Agra for the Taj Mahal, Jodhpur, Udaipur (city of lakes) and Delhi, to experience the vibrancy of Rajasthan.'
      },
      {
        imgSrc: 'assets/imgs/slide3.jpg',
        imgName: 'test',
        tourName: 'Tours in Amritsar',
        tourDescp: 'Busy street life, vibrant colours, tranquil havens, culture shocks and architectural splendours await those who take the classic introduction to this vast and varied country. From Royal ruins to rich shopping opportunities, "The Golden Triangle" is an ideal trip for the first-time visitor to India.'
      },
    ];

    this.serviceList = [
      {
        imgIcon: 'assets/imgs/service-icon1.png',
        heading: 'Happy Clients',
        descp: 'Lorem ipsum dummy text and dummy value Lorem ipsum dummy text and dummy value  ',
      },
      {
        imgIcon: 'assets/imgs/service-icon2.png',
        heading: 'Amazing Tour',
        descp: 'Lorem ipsum dummy text and dummy value Lorem ipsum dummy text and dummy value ',
      },
      {
        imgIcon: 'assets/imgs/service-icon3.png',
        heading: 'Support Cases',
        descp: 'Lorem ipsum dummy text and dummy value Lorem ipsum dummy text and dummy value ',
      },
      {
        imgIcon: 'assets/imgs/service-icon4.png',
        heading: 'Special Offers',
        descp: 'Lorem ipsum dummy text and dummy value Lorem ipsum dummy text and dummy value ',
      },
    ];
    this.galleryList = [
      'assets/imgs/g1.jpeg',
      'assets/imgs/g2.jpeg',
      'assets/imgs/g3.jpeg',
      'assets/imgs/g4.jpeg',
      'assets/imgs/g5.jpeg',
      'assets/imgs/g6.jpeg',
      'assets/imgs/g7.jpeg',
      'assets/imgs/g8.jpeg',
      'assets/imgs/g9.jpeg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide2.jpg',
      'assets/imgs/slide3.jpg',
      'assets/imgs/slide4.jpg',
    ];

    this.testimonalList = [
      {
        name: 'SIR STUART & LADY HAMPSON, UK',
        descp: 'A memorable holiday in India under your excellent guidance.We were impressed with your stress-free driving skills and how you smoothed the rough roads and brought us calm and relaxed to each destination. Thank you for enriching our holiday with your explanations and comments on all aspects of Indian life.',
      },
      {
        name: 'MARK & OLIVIA WARLAM, LONDON, UK',
        descp: 'What a difference it has made to our holiday to have such a helpful, cheerful and easy going person alongside us. Excellent English and interesting information and, of course, expertise on the roads.',
      },
      {
        name: 'MARGARET BARNES, CONWY, WALES, UK',
        descp: 'Your constant good humour, careful driving, history lessons and good cooking made our holiday so memorable.',
      },
      {
        name: 'FRANCES ROYSTON, EAST SUSSEX, UK',
        descp: 'Vigilant driver, Informative guide, Jolly companion, Attentive host, You are the best.',
      },
      {
        name: 'PENNY LEE, BERKSHIRE, UK & DIANA CABLE, GREENWICH, USA',
        descp: 'An education in itself. You have taught us about Hinduism, Indian village life, holy cows, Indian politics, Kashmir, and much more. We commend your driving; your patience (especially when shopping!) and alertness in some hair-raising moments on the road! We will return one day – and ask for you. Namaste Vijay – and dhanyaval.',
      },
      {
        name: 'ALASTAIR & ROSE SMITH, KENT, UK',
        descp: 'We could not have asked for more in a driver. Loads of valuable advice and information. We will be sure to ask for you when we return to visit the Taj Mahal and maybe Shimla.',
      },
      {
        name: 'CHUCK & MELINDA ALVARA',
        descp: 'What a privilege it has been to get to know you and see India through your eyes. An unforgettable experience. And we have made a life-long friend.',
      },
      {
        name: 'JILL HILL & JIM JACKSON, SUSSEX, UK',
        descp: 'To describe Vijay simply as a driver is a monumental understatement. He has shown us parts of India that guide books cannot. His experience gave us many hints and sound advice (subtly delivered) about our shopping, tipping, etc. as he steered us through many bewildering facets of Indian life.',
      },
    ];
  }

  ngOnInit(){
    
  }

  scroll(el: HTMLElement, event: any){
    let elements = document.querySelectorAll('.menu-heading');
    if(elements && elements.length) {
      elements.forEach(elemn => {
        elemn.classList.remove("active");
      })
    }
    if(event && event.target){
      event.target.classList.add('active');
    }
    el.scrollIntoView({behavior: "smooth"});
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    let bannerDiv = document.getElementById('bannerSection');
    let tourDiv = document.getElementById('toursSection');
    let galleryDiv = document.getElementById('gallerySection');
    let serviceDiv = document.getElementById('serviceSection');
    let testimonalDiv = document.getElementById('testimonalSection');
    let contactDiv = document.getElementById('contactSection');
    let elements = document.querySelectorAll('.menu-heading');
    if(elements && elements.length) {
      elements.forEach(elemn => {
        elemn.classList.remove("active");
      })
    }
    if ( document.documentElement.scrollTop == 0  || (document.documentElement.scrollTop > bannerDiv.offsetTop) && document.documentElement.scrollTop < tourDiv.offsetTop){
      document.getElementsByClassName('menu-home')[0].classList.add('active');
    }else if( (document.documentElement.scrollTop+ 60) >= tourDiv.offsetTop && (document.documentElement.scrollTop+ 60) < galleryDiv.offsetTop){
      document.getElementsByClassName('menu-tour')[0].classList.add('active');   
    }else if( (document.documentElement.scrollTop+ 60) >= galleryDiv.offsetTop && (document.documentElement.scrollTop+ 60) < serviceDiv.offsetTop){
      document.getElementsByClassName('menu-gallery')[0].classList.add('active');   
    }else if( ((document.documentElement.scrollTop+ 60)) >= serviceDiv.offsetTop && (document.documentElement.scrollTop+ 60) < testimonalDiv.offsetTop){
      document.getElementsByClassName('menu-service')[0].classList.add('active');   
    }else if( (document.documentElement.scrollTop+ 60) >= testimonalDiv.offsetTop && (document.documentElement.scrollTop+ 60) < contactDiv.offsetTop){
      document.getElementsByClassName('menu-testimonal')[0].classList.add('active');   
    }else if( (document.documentElement.scrollTop+ 60) >= contactDiv.offsetTop){
      document.getElementsByClassName('menu-contact')[0].classList.add('active');   
    }

  }
}
