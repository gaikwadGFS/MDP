import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadpropertiesComponent } from './UploadProperties/uploadproperties/uploadproperties.component';
import { ViewpropertiesComponent } from './UploadProperties/viewproperties/viewproperties.component';
import { RegisterpropertyComponent } from './Registration/registerproperty/registerproperty.component';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';
import { ViewRegisterPropertiesComponent } from './Registration/view-register-properties/view-register-properties.component';
import { SerachRegistrarOfficeComponent } from './serach-registrar-office/serach-registrar-office.component';
import { CheckMahaReraComponent } from './check-maha-rera/check-maha-rera.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

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
          path:'Search_registrar_office',
          component:SerachRegistrarOfficeComponent
        },
        {
          path:'uploadProperties',
          component:UploadpropertiesComponent
        },
        {
          path:'uploadProperties/:id',
          component:UploadpropertiesComponent
        },
        {
          path:'viewUploadedProperties',
          component:ViewpropertiesComponent
        },
        // {
        //   path:'viewUploadedProperties/:id',
        //   component:ViewpropertiesComponent
        // },
        {
          path:'check_maharera',
          component:CheckMahaReraComponent
        },
        {
          path:'mostPopular',
          component:MostPopularComponent
        },
        {
          path: 'propertyDetails/:id',  
          component: PropertyDetailsComponent
      },
      {
        path: 'propertyDetails',  
        component: PropertyDetailsComponent
    }
      ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
