import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './ui-components/home/home.component';
import { ProjectComponent } from './ui-components/project/project.component';
import { ProjectListComponent } from './ui-components/project-list/project-list.component';
import { NavbarComponent } from './ui-components/common/navbar/navbar.component';
import { ProjectPreviewComponent } from './ui-components/project-list/project-preview/project-preview.component';
import { FooterComponent } from './ui-components/common/footer/footer.component';
import { TeamComponent } from './ui-components/team/team.component';
import { BlogComponent } from './ui-components/blog/blog.component';
import { ContactComponent } from './ui-components/contact/contact.component';
import { ContactFormComponent } from './ui-components/common/contact-form/contact-form.component';
import { BlogListComponent } from './ui-components/common/blog-list/blog-list.component';
import { IconListComponent } from './ui-components/common/icon-list/icon-list.component';
import { TestimonialComponent } from './ui-components/common/testimonial/testimonial.component';
import { TeamMemberComponent } from './ui-components/common/team-member/team-member.component';
import { BlogPostComponent } from './ui-components/blog-post/blog-post.component';
import { MobileNavComponent } from './ui-components/common/navbar/mobile-nav/mobile-nav.component';
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
