import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TestimonialCardComponent } from '../../common/testimonial-card/testimonial-card.component';
import { TestimonialService } from '../../services/testimonial.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CaseStudySliderComponent } from '../../common/case-study-slider/case-study-slider.component';
import { CaseStudyService } from '../../services/case-study.service';
import { ServiceBannerComponent } from '../../common/service-banner/service-banner.component';
import { FormDataService } from '../../services/form-data.service';
import { ToastrService } from 'ngx-toastr';
import { ScheduleCallCTAComponent } from '../../common/schedule-call-cta/schedule-call-cta.component';
import { EngagementModelsComponent } from '../../common/engagement-models/engagement-models.component';
import { HiringProcessComponent } from '../../common/hiring-process/hiring-process.component';
import { SolutionsService } from '../../services/solutions.service';
import { CommonModule } from '@angular/common';

declare var Swiper: any;

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [
    CaseStudySliderComponent,
    TestimonialCardComponent,
    RouterModule,
    ServiceBannerComponent,
    EngagementModelsComponent,
    ScheduleCallCTAComponent,
    HiringProcessComponent,
    CommonModule,
  ],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss',
})
export class SolutionComponent {
  constructor(
    private meta: Meta,
    private testimonialService: TestimonialService,
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private formDataService: FormDataService,
    private router: Router,
    private toastr: ToastrService,
    private solutionsService: SolutionsService
  ) {
    this.meta.addTag({ name: 'title', content: 'Home page' });
  }

  posts: any = [];
  currentIndex: number = 0;
  id!: string;
  currentTestimonial: any;
  isLoading: boolean = false;
  pageType: any;
  initialHeader: string = '';
  mainHeader: string = '';
  description: string = '';
  buttonCta: string = '';
  solutions: any = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageType = params?.['type'];
      if (this.pageType === 'mobile-app-development') {
        this.initialHeader = 'APP DEVELOPMENT';
        this.mainHeader = 'Build sleek, secure apps that scale.';
        this.description =
          'Create beautiful, robust iOS apps to engage and convert Apple users. Onboard our top 1% iOS devs within 2 weeks.';
        this.buttonCta = 'Build Your iOS App';
      } else if (this.pageType === 'dedicated-teams') {
        this.initialHeader = 'DEDICATED SOFTWARE DEVELOPMENT TEAMS';
        this.mainHeader = 'Software Teams. Seamlessly Integrated.';
        this.description =
          'Deliver end-to-end projects efficiently and reliably with our embedded software development teams.';
        this.buttonCta = 'Assemble my Ideal Team';
      } else if (this.pageType === 'software-outsourcing') {
        this.initialHeader = 'SOFTWARE DEVELOPMENT OUTSOURCING';
        this.mainHeader =
          'Software Development. Project Management.Off Your Plate.';
        this.description =
          'From definition and design, to development and testing, we provide end-to-end software outsourcing when you don’t have the capacity or expertise in-house.';
        this.buttonCta = 'Assemble my Ideal Team';
      }

      this.getSolutions();
      // this.getCaseStudies();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }

  swiperinit() {
    window.setTimeout(() => {
      var swiper = new Swiper('.case-study-slider', {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,

        navigation: {
          nextEl: '.case-study-slider-next',
          prevEl: '.case-study-slider-prev',
        },

        breakpoints: {
          280: {
            slidesPerView: 1,
          },
          386: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 2,
          },
        },
      });
    }, 100);
  }
  swiperinitTestimonial() {
    window.setTimeout(() => {
      var swiper = new Swiper('.home3-testimonial-slider', {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        navigation: {
          nextEl: '.home3-testimonial-next',
          prevEl: '.home3-testimonial-prev',
        },
      });
    }, 100);
  }

  // getCaseStudies() {
  //   this.caseStudyService
  //     .fetchPosts()
  //     .then((resp: any) => {
  //       this.posts = resp?.items;

  //       this.swiperinit();
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }
  getSolutions() {
    this.solutionsService
      .getSolutions()
      .then((res) => {
        this.loading = false;
        this.swiperinitTestimonial();
        this.swiperinit();
        this.solutions = res?.items.filter((item: any) => {
          return item.data['identifier-slug'].iv === this.pageType;
        });
      })
      .catch((err: any) => {
        console.log(err);
        this.loading = false;
      });
  }

  onSubmit(formValues: any) {
    if (formValues.valid) {
      this.isLoading = true;
      this.formDataService
        .saveScheduleCall(formValues.value)
        .subscribe((res) => {
          this.isLoading = false;
          if (res.result === 1) {
            this.id = res.data._id;
            this.router.navigate(
              ['/schedule-call/contact-information', this.id],
              { queryParams: { services: 'true' } }
            );
          }
        }),
        (error: any) => {
          this.isLoading = false;
          console.error('Error occurred:', error);
          this.toastr.error('Something went wrong. Please try again.');
        };
    }
  }
}
