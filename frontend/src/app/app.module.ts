import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularSettingsModule } from "./shared/angular-settings/angular-settings.module";
import { AngularMaterialUIModule } from "./shared/angular-material-ui/angular-material-ui.module";
import { CustomModule } from "./modules/custom.module";
import { AppComponent } from "./app.component";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    // Exports de modulos funcionales de Angular.io
    CustomModule,

    // Exports de las configuraciones generales de Angular.io
    AngularSettingsModule,

    // Exports de Angular Material UI
    AngularMaterialUIModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
