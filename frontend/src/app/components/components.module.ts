import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { CrearproductoComponent } from './crearproducto/crearproducto.component';
import { BorrarproductoComponent } from './borrarproducto/borrarproducto.component';
import { ActualizarproductoComponent } from './actualizarproducto/actualizarproducto.component';
import { ProductosComponent } from './productos/productos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        CrearproductoComponent,
        BorrarproductoComponent,
        ActualizarproductoComponent,
        ProductosComponent,
        CabeceraComponent,
        FooterComponent,
        EditarproductoComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
