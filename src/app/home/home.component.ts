import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ItineraryService } from '../itinerary.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: any = [];
  packageList: any = [];
  serviceList: any = [];
  galleryList: any = [];
  testimonalList: any = [];
  showMenu: boolean = true;
  viewMessage:boolean = false;
  formhasError: boolean = false;
  contactForm: FormGroup;
  constructor(public itineraryService: ItineraryService, public route: Router, public http: HttpClient) {
    this.contactForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      emailId: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    })
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
        imgSrc: 'assets/imgs/slide1.jpg',
        imgName: "Rajasthan Tour",
        tourName: 'Tours in Rajasthan',
        tourDescp: 'Architectural wonders, exquisite handicrafts, colourful culture and tempting cuisine are few of the many highlights of this magnificent state. Set amidst a vast desert, the magical land of Rajasthan is synonymous with romance and chivalry.',
        itineraryDetail: [
          'Trip starts from Delhi.',
          'After breakfast drive to Jaipur, on the way visit Fatehpur sikri. Chand bowri Abhaneri. Night at hotel.',
          'Full day city tour of Jaipur. Night at hotel.',
          'After breakfast drive to Pushkar, visit lord Brahma temple, Holi lake, walk in the colour full bazar, night at hotel.',
          'After breakfast drive to Udaipur on the way, visit the largest Fort of Chittorgarh, after lunch drive to Udaipur. Night at hotel',
          'After breakfast full day city tour of Udaipur. City palace, museum boat ride at lake pichola, saheliyon ki Bari. Sas bahu temple. Night at hotel.',
          'After breakfast drive to Jodhpur, on the way visit the ancient Jain temple, after lunch drive to Jodhpur.',
          'Full day city tour of Jodhpur. Visit Mehrangarh fort, Jaswant thara. Clocktower & spice market. Bishnoi village. Night at hotel.',
          'After breakfast drive to Jaisalmer, night at hotel.', 
          'After breakfast visit Gadisar Lake, Golden fort, Patuon ki Havely. Afternoon drive to small village Khuri. Where you can enjoy the camel ride, in the second largest desert in the world. After sunset, come back to the camp, where after tea coffee and snacks, you will see the local folk dance with bonfire. Dinner and night at the camp.',
          'After breakfast drive to Bikaner. On the way visit the small village Khichan to see the thousands of the    Dimosile Sibarian cranes Night at Bikaner.',
          'After breakfast visit the Junagarh fort & museum. Visit the old city to see the nice Havelies on the tuk tuk. After lunch, visit the camel breeding farm. Night at hotel',
          'After breakfast drive to Mandawa, check in the hotel. Afternoon, visit the small and colourful town, with very nice old and painted Havelies.',
          'After breakfast, drive back to Delhi.'
        ]

      },
      {
        imgSrc: 'assets/imgs/ranthambore.jpg',
        imgName: 'Golden triangle tour with Ranthambore Tiger reserve',
        tourName: 'Ranthambore Tiger reserve',
        tourDescp: 'Ranthambore National Park is a vast wildlife reserve near the town of Sawai Madhopur in Rajasthan, northern India. It is a former royal hunting ground and home to tigers, leopards and marsh crocodiles. Its landmarks include the imposing 10th-century Ranthambore Fort, on a hilltop, and the Ganesh Mandir temple. Also in the park, Padam Talao Lake is known for its abundance of water lilies.',
        itineraryDetail : [
          'Trip starts from Delhi.',
          'After early breakfast. Drive to Agra, check in the hotel. Full day city tour of Agra. Night at hotel. ',
          'After breakfast, drive to Ranthambore. Check in the hotel, afternoon jeep Safari to see the Tiger and other wildlife. Night at hotel.',
          'Around 6 clock, in the morning, another jeep Safari to see the wild life. 10 clock back to the hotel. Have shower, breakfast and drive to Jaipur. Night at hotel.',
          'After breakfast, a full day city tour of Jaipur, including monkey temple and Birla temple. Night at hotel.',
          'After breakfast drive back to Delhi.',
        ]
      },
      {
        imgSrc: 'assets/imgs/slide4.jpg',
        imgName: 'test',
        tourName: 'Tours in Agra',
        tourDescp: 'Home to one of the 7 wonders of the world, the Taj Mahal, Agra is a sneak peek into the architectural history with other UNESCO World Heritage Sites as Agra Fort and Fatehpur Sikri. History, architecture, romance all together create the magic of Agra and hence makes for a must-visit for anyone living in or visiting India.',
        itineraryDetail : [
          'Trip starts from Delhi.',
          'Day tour of Agra.',
          'Drive early in the morning to Agra, you will meet to the guide, he will escort you to see the Taj Mahal, Red fort, Mehtab Bagh and Baby Taj.',
          'In the evening back to Delhi.',
        ]
      },
      {
        imgSrc: 'assets/imgs/redfort.jpg',
        imgName: 'test',
        tourName: 'City tour in Delhi',
        tourDescp: 'Visit Jaipur, Agra for the Taj Mahal, Jodhpur, Udaipur (city of lakes) and Delhi, to experience the vibrancy of Rajasthan.',
        itineraryDetail : [
          'Trip starts from Delhi.',
          'After breakfast, the tour will start from Jama Masjid. Raj Ghat. Akshardham temple. Humayoun tomb. Bangla Sahib Gurdwara. India gate. Parliament House. President palace. Qutub minar. Birla temple. End of the tour.'
        ]
      },
      {
        imgSrc: 'assets/imgs/india-gate.jpg',
        imgName: 'test',
        tourName: 'Golden Triangle Tour.        ',
        tourDescp: 'Busy street life, vibrant colours, tranquil havens, culture shocks and architectural splendours await those who take the classic introduction to this vast and varied country. From Royal ruins to rich shopping opportunities, "The Golden Triangle" is an ideal trip for the first-time visitor to India.',
        itineraryDetail : [
         'Trip starts from Delhi.',
         'After early breakfast, drive to Agra. Visit the Taj Mahal. Red Fort. Mehtab Bagh. Mini Taj Mahal. May be in the evening, you can go to see the live dancing show, about the life of the Shahjahan, at Kalakriti. Night at hotel.',
         'After breakfast, drive to Jaipur, on the way visit Fatehpur sikri. Chand baori in Abhaneri. Night at hotel in Jaipur.',
         'After breakfast, drive to see the wind palace just a photo stop. Amber palace. Panna Meena Ka kund. JAL Mahal. Block Printing. City palace & museum. Jantar Mantar. Monkey temple. Arti at Birla temple night at hotel.',
         'After breakfast, drive back to Delhi.',
        ]
      },
    ];

    this.serviceList = [
      {
        imgIcon: 'assets/imgs/service-icon1.png',
        heading: 'Happy Clients',
        descp: 'We believe in quality services from our ground staff, so as we impart the same to our guest. For us customer satisfaction is very important',
      },
      {
        imgIcon: 'assets/imgs/service-icon2.png',
        heading: 'Amazing Tour',
        descp: 'Amazing tours and packages also have good deals with most of the Hotels, Budgeted, luxury and Heritage in All over India ',
      },
      {
        imgIcon: 'assets/imgs/service-icon3.png',
        heading: 'Support Cases',
        descp: 'We arrange tours for domestic, international, inbound and pilgrim tourists by taking under -consideration the desire and budget of a tourist.',
      },
      {
        imgIcon: 'assets/imgs/service-icon4.png',
        heading: 'Special Offers',
        descp: 'We will provide you the best transport services of its own, Innova, Ertiga,Dezire, Etios, Tempo traveler, Luxury Buses.as per your budget and need.',
      },
    ];
    this.galleryList = [
      'assets/imgs/gallery/first.jpg',
      'assets/imgs/gallery/second.jpg',
      'assets/imgs/gallery/client3.jpeg',
      'assets/imgs/gallery/g5.jpg',
      // 'assets/imgs/gallery/seventh.jpg',
      'assets/imgs/gallery/g1.jpg',
      'assets/imgs/gallery/fifth.jpg',

      // 'assets/imgs/gallery/sixth.jpg',
      // 'assets/imgs/gallery/client1-2.jpeg',
      'assets/imgs/gallery/client4.jpeg',
      'assets/imgs/gallery/third.jpg',
      'assets/imgs/gallery/g10.jpg',
      // 'assets/imgs/gallery/g4.jpg',
      'assets/imgs/gallery/g2.jpg',
      'assets/imgs/gallery/g7.jpg',
      
      'assets/imgs/gallery/client5.jpeg',
      'assets/imgs/gallery/forth.jpg',
      'assets/imgs/gallery/client1.jpeg',
      'assets/imgs/gallery/client7.jpeg',
      'assets/imgs/gallery/g8.jpg',
      // 'assets/imgs/gallery/g3.jpg',
      'assets/imgs/gallery/g9.jpeg',
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

  ngOnInit() {
    this.galleryList = this.chunkArray(this.galleryList, 6);
    console.log(this.galleryList, 'list');
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
    let aboutDiv = document.getElementById('aboutSection');
    let testimonalDiv = document.getElementById('testimonalSection');
    let contactDiv = document.getElementById('contactSection');
    let elements = document.querySelectorAll('.menu-heading');
    if(elements && elements.length) {
      elements.forEach(elemn => {
        elemn.classList.remove("active");
      })
    }
    if ((document.getElementsByClassName('menu-home') && document.getElementsByClassName('menu-home')[0]) && document.documentElement.scrollTop == 0  || (document.documentElement.scrollTop > bannerDiv.offsetTop) && document.documentElement.scrollTop < tourDiv.offsetTop){
      document.getElementsByClassName('menu-home')[0].classList.add('active');
    }else if((document.getElementsByClassName('menu-tour') && document.getElementsByClassName('menu-tour')[0]) && (document.documentElement.scrollTop+ 60) >= tourDiv.offsetTop && (document.documentElement.scrollTop+ 60) < galleryDiv.offsetTop){
      document.getElementsByClassName('menu-tour')[0].classList.add('active');   
    }else if((document.getElementsByClassName('menu-gallery') && document.getElementsByClassName('menu-gallery')[0]) &&(document.documentElement.scrollTop+ 60) >= galleryDiv.offsetTop && (document.documentElement.scrollTop+ 60) < serviceDiv.offsetTop){
      document.getElementsByClassName('menu-gallery')[0].classList.add('active');   
    }else if((document.getElementsByClassName('menu-service') && document.getElementsByClassName('menu-service')[0]) && ((document.documentElement.scrollTop+ 60)) >= serviceDiv.offsetTop && (document.documentElement.scrollTop+ 60) < testimonalDiv.offsetTop){
      document.getElementsByClassName('menu-service')[0].classList.add('active');   
    }else if((document.getElementsByClassName('menu-testimonal') && document.getElementsByClassName('menu-testimonal')[0]) && (document.documentElement.scrollTop+ 60) >= testimonalDiv.offsetTop && (document.documentElement.scrollTop+ 60) < aboutDiv.offsetTop){
      document.getElementsByClassName('menu-testimonal')[0].classList.add('active');   
    }else if((document.getElementsByClassName('menu-about') && document.getElementsByClassName('menu-about')[0]) && (document.documentElement.scrollTop+ 60) >= aboutDiv.offsetTop && (document.documentElement.scrollTop+ 60) < contactDiv.offsetTop){
      document.getElementsByClassName('menu-about')[0].classList.add('active');   
    }else if((document.getElementsByClassName('menu-contact') && document.getElementsByClassName('menu-contact')[0]) && (document.documentElement.scrollTop+ 60) >= contactDiv.offsetTop){
      document.getElementsByClassName('menu-contact')[0].classList.add('active');   
    }

  }


  openMenu(){
    this.showMenu = !this.showMenu;
  }

  viewItinerary(itinerayData){
    console.log(itinerayData, 'itenary data');
    if(itinerayData){
      this.itineraryService.setItineraryData(itinerayData);
      this.route.navigate(['/itinerary']);
    }
  }


  chunkArray(myArray, chunk_size){
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk: any;
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}


submitReview(formData){
  let headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
    if(formData.valid) {
      this.http.post('https://formspree.io/mdozjgkw', formData.value, headers).subscribe((data)=> {
        if(data && data['ok']) {
          this.viewMessage = true;
          setTimeout(() => {
            this.viewMessage = false;
            this.contactForm.reset();
          }, 2400);
        }
    }, error => {
      console.log(error, 'error');
    });
  }else {
    this.formhasError = true;
    setTimeout(()=> {
      this.formhasError = false;
    }, 2400);
  }
}


  

}
