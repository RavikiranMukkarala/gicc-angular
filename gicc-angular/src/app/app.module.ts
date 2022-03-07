import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { UsdinrPipe } from './custompipes/usdinr.pipe';
import { HomepageComponent } from './ui/homepage/homepage.component';
   
@NgModule({
  declarations: [
    AppComponent,
    UsdinrPipe,
    HomepageComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
