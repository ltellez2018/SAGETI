import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// * For Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';



// * For Angular Material
import { MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatDividerModule,
         MatSnackBarModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule,
         MatSelectModule} from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
                CommonModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                FlexLayoutModule,
                MatDividerModule,
                MatSnackBarModule,
                MatSidenavModule,
                MatToolbarModule,
                MatListModule,
                MatTooltipModule,
                MatChipsModule,
                MatButtonToggleModule,
                MatSelectModule
            ],
    exports: [
                MatCardModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                FlexLayoutModule,
                MatDividerModule,
                MatSnackBarModule,
                MatSidenavModule,
                MatToolbarModule,
                MatListModule,
                MatTooltipModule,
                MatChipsModule,
                MatButtonToggleModule,
                MatSelectModule
            ],
    providers: [],
})
export class MaterialModule {}
