import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { HttpClient } from '@angular/common/http';
import { CountryLookupService } from './country-lookup.service';



@NgModule({
  declarations: [AppComponent, WorldComponent],
  imports: [ CommonModule, AppRoutingModule, WorldComponent, HttpClient],
  providers: [CountryLookupService],
  bootstrap: [AppComponent]
})

export class AppModule {}


