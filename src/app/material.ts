import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { NgModule } from '@angular/core';

@NgModule({
 
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule]
 
})
export class MaterialModule { }