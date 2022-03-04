import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProjectPreviewComponent } from './project-list/project-preview/project-preview.component';
import { FooterComponent } from './common/footer/footer.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { BlogListComponent } from './common/blog-list/blog-list.component';
import { IconListComponent } from './common/icon-list/icon-list.component';
import { TestimonialComponent } from './common/testimonial/testimonial.component';
import { TeamMemberComponent } from './common/team-member/team-member.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MobileNavComponent } from './common/navbar/mobile-nav/mobile-nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectListComponent,
    NavbarComponent,
    ProjectPreviewComponent,
    FooterComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    ContactFormComponent,
    BlogListComponent,
    IconListComponent,
    TestimonialComponent,
    TeamMemberComponent,
    BlogPostComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
