import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChildModule }            from './child.module';

platformBrowserDynamic().bootstrapModule(ChildModule);