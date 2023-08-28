import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { RowComponent } from './components/view/row/row.component';
import { IntroViewComponent } from './components/screens/intro-view/intro-view.component';
import { RoundViewComponent } from './components/screens/round-view/round-view.component';
import { StartViewComponent } from './components/screens/start-view/start-view.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { InputTextComponent } from './components/overlay/input-text/input-text.component';
import { SectionComponent } from './components/overlay/section/section.component';
import { InputColorComponent } from './components/overlay/input-color/input-color.component';
import { TeamComponent } from './components/view/team/team.component';
import { InputTeamComponent } from './components/overlay/input-team/input-team.component';
import { InputEnumComponent } from './components/overlay/input-enum/input-enum.component';
import { InputRoundComponent } from './components/overlay/input-round/input-round.component';
import { InputPlaybackComponent } from './components/overlay/input-playback/input-playback.component';
import { ShorcutComponent } from './components/view/shorcut/shorcut.component';
import { ScoreComponent } from './components/view/score/score.component';
import { TitleComponent } from './components/view/title/title.component';
import { InstructionsViewComponent } from './components/screens/instructions-view/instructions-view.component';
import { EndViewComponent } from './components/screens/end-view/end-view.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './routes/main/main.component';
import { SecondScreenComponent } from './routes/second-screen/second-screen.component';
import { InputFileComponent } from './components/overlay/input-file/input-file.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'second', component: SecondScreenComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    IntroViewComponent,
    RoundViewComponent,
    StartViewComponent,
    OverlayComponent,
    InputTextComponent,
    SectionComponent,
    InputColorComponent,
    TeamComponent,
    InputTeamComponent,
    InputEnumComponent,
    InputRoundComponent,
    InputPlaybackComponent,
    ShorcutComponent,
    ScoreComponent,
    TitleComponent,
    InstructionsViewComponent,
    EndViewComponent,
    MainComponent,
    SecondScreenComponent,
    InputFileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
