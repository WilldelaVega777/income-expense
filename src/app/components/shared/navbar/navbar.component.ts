//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';
import { Input }                        from '@angular/core';

//----------------------------------------------------------------------------
// Imports Section (App)
//----------------------------------------------------------------------------
import { IUser }                        from './../../../models/user.model';

//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class NavbarComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // @Input Attributes Section
    //------------------------------------------------------------------------
    @Input() user                           : IUser;



    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Public Properties Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor()
    {

    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {

    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {

    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
