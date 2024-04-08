import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDataTableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'welcome', component: WelcomeComponent},
    // {path: '', redirectTo: '/welcome', pathMatch: 'full'}
    {path: '', component: WelcomeComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'for-directive-example', component: ForDirectiveExampleComponent },
    {path: 'simple-data-table-example', component: SimpleDataTableExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
    {path: 'reactive-form-example', component: ReactiveFormExampleComponent}
];
