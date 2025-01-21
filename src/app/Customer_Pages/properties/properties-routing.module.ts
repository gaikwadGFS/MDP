import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadpropertiesComponent } from './UploadProperties/uploadproperties/uploadproperties.component';
import { ViewpropertiesComponent } from './UploadProperties/viewproperties/viewproperties.component';
import { RegisterpropertyComponent } from './Registration/registerproperty/registerproperty.component';

const routes: Routes = [
  {
    path:'uploadProperties',
    component:UploadpropertiesComponent
  },
  {
    path:'viewUploadedProperties',
    component:ViewpropertiesComponent
  },
  {
    path:'registerProperties',
    component:RegisterpropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
