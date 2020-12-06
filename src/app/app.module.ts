import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AngularFireModule } from '@angular/fire';
import { TraitsService } from './services/traits.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AttributeNamePipe } from './pipes/attribute-name.pipe';
import { TraitsComponent } from './pages/traits/traits.component';
import { ChampionComponent } from './pages/champion/champion.component';
import { AttributeKindService } from './services/attribute-kind.service';
import { ChampionsService } from './services/champions.service';
import { ItemsComponent } from './pages/items/items.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateAttributeKindDialogComponent } from './dialogs/create-attribute-kind-dialog/create-attribute-kind-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    AttributeNamePipe,
    TraitsComponent,
    ItemsComponent,
    CreateAttributeKindDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFireStorageModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [TraitsService, AttributeKindService, ChampionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
