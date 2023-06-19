import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { NotFoundComponent } from './home/not-found/not-found.component';
import { IndicadorComponent } from './admin/pages/indicador/indicador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent} from './admin/pages/usuarios/usuarios.component';

import { ResumenComponent} from './admin/pages/resumen/resumen.component';
import { ReporventaComponent } from './admin/pages/reporventa/reporventa.component';
import { MenuppalComponent } from './home/menuppal/menuppal.component';
import { VolverService } from './core/services/volverservices.service';
import { OpersubmenuComponent } from './admin/pages/opersubmenu/opersubmenu.component';
import { LoginComponent } from './login/login.component';
import { VentaoperativaComponent } from './admin/pages/ventaoperativa/ventaoperativa.component';
import { ObjetoModelo } from './core/models/baseventa.model';
import { UsuarioService } from './core/services/usuario.service';



const appRoutes: Routes = [
  
  {path: 'menuppal', component:MenuppalComponent},
  {path: 'login', component:LoginComponent},
  {path: 'indicador', component:IndicadorComponent},
  {path: 'reporteventa', component:ReporventaComponent},
  {path: 'resumen', component:ResumenComponent}, 
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'opersubmenu', component:OpersubmenuComponent},
  {path: 'resultado', component:VentaoperativaComponent}, //trasladar a ResulventaCom..
  {path: '',
  redirectTo: '/menuppal',
  pathMatch: 'full'
},
  {path: '**' , component:NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    IndicadorComponent,
    DashboardComponent,
    UsuariosComponent,
    ResumenComponent,
    ReporventaComponent,
    MenuppalComponent,
    OpersubmenuComponent,
    VentaoperativaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxChartsModule
    
  ],
  providers: [VolverService, UsuarioService, LoginComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
