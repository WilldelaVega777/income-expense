//--------------------------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FooterComponent }          from '../components/shared/footer/footer.component';
import { NavbarComponent }          from '../components/shared/navbar/navbar.component';
import { SidebarComponent }         from '../components/shared/sidebar/sidebar.component';


//--------------------------------------------------------------------------------
// Module Configuration Section
//--------------------------------------------------------------------------------
@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ]
})
//--------------------------------------------------------------------------------
// Module Class Section
//--------------------------------------------------------------------------------
export class SharedModule {}
