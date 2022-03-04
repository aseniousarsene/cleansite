import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './ui-components/home/home.component';
import {ProjectListComponent} from './ui-components//project-list/project-list.component';
import {ProjectComponent} from './ui-components//project/project.component';
import {TeamComponent} from './ui-components//team/team.component';
import {BlogComponent} from './ui-components//blog/blog.component';
import {ContactComponent} from './ui-components//contact/contact.component';
import {BlogPostComponent} from './ui-components//blog-post/blog-post.component';

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
