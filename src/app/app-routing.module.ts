import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductComponent } from './product/product.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  //l'ordre de path ici edoit etre respecté
{path:'product', component:ProductComponent},
{path:'articles', component:ArticlesComponent},
{path:'todoList', component:TodoListComponent},
{path:'',redirectTo:'product',pathMatch:'full'},
{path:'offres-emploi', component:OffresEmploiComponent},
{path:'**',component:NotFoundComponent}//redirection si le path demandé sur le navigateur n'existe pas
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //RouterModule assure le systeme de navisation ou routing
  //routes est un tableau qui contient tout les routes de composants du projet
  exports: [RouterModule]
})
export class AppRoutingModule { }
