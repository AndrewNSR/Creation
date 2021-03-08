import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { CareerComponent } from "./career/career.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicesComponent } from "./services/services.component";
import { TeamComponent } from "./team/team.component";
import { WorkComponent } from "./work/work.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'career', component: CareerComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactsComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'work',component: WorkComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'team', component: TeamComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}