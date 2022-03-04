import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectComponent} from './project/project.component';
import {TeamComponent} from './team/team.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {BlogPostComponent} from './blog-post/blog-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'team', component: TeamComponent, data: {animation: 'team'}},
  {path: 'blog', component: BlogComponent, data: {animation: 'blog'}},
  {path: 'post', component: BlogPostComponent, data: {animation: 'blog-post'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  {path: 'projects', component: ProjectListComponent, data: {animation: 'projects'}},
  {path: 'project/:id', component: ProjectComponent, data: {animation: 'project'}},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
