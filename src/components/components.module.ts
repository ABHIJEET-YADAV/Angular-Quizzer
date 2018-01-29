import { NgModule } from '@angular/core';
import { QuizCardComponent } from './quiz-card/quiz-card';
import { IonicPageModule } from 'ionic-angular';
import { SideMenuComponent } from './side-menu/side-menu';

@NgModule({
	declarations: [QuizCardComponent,
		SideMenuComponent],
	imports: [IonicPageModule.forChild(QuizCardComponent), IonicPageModule.forChild(SideMenuComponent)],
	exports: [QuizCardComponent,
		SideMenuComponent]
})
export class ComponentsModule {}
