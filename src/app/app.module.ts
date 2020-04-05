import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';   //<----------
import { AppComponent } from './app.component';
import { ReceptesComponent } from './receptes/receptes.component';
import { ReceptesFormulariComponent } from './receptes-formulari/receptes-formulari.component';
import { ComentariFormComponent } from './comentari-form/comentari-form.component';
import { SearchPipe } from './search.pipe';
import { SelectPipe } from './select.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReceptesComponent,
    ReceptesFormulariComponent,
    ComentariFormComponent,
    SearchPipe,
    SelectPipe
  ],
  imports: [          
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
