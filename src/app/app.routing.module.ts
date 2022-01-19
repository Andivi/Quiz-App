import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'category/:name',
    pathMatch: 'full',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionModule)
  },
]
  
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}