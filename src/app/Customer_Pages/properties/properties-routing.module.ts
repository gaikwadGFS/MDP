import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadpropertiesComponent } from './UploadProperties/uploadproperties/uploadproperties.component';
import { ViewpropertiesComponent } from './UploadProperties/viewproperties/viewproperties.component';
import { RegisterpropertyComponent } from './Registration/registerproperty/registerproperty.component';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';
import { ViewRegisterPropertiesComponent } from './Registration/view-register-properties/view-register-properties.component';

const routes: Routes = [

   {
      path: '',
      component: SidebarComponent,
      children:[
        {
          path:'registerProperties',
          component:RegisterpropertyComponent
        },
        {
          path:'view_Register_Properties',
          component:ViewRegisterPropertiesComponent
        },
        {
          path:'uploadProperties',
          component:UploadpropertiesComponent
        },
        {
          path:'viewUploadedProperties',
          component:ViewpropertiesComponent
        },

      ]
   },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
