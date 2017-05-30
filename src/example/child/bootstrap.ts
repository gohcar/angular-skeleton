import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChildModule }            from './child.module';

declare var ENV:string;

if ('production' === ENV) enableProdMode();
platformBrowserDynamic().bootstrapModule(ChildModule);