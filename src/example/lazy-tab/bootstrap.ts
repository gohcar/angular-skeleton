import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LazyTabModule }          from './lazy-tab.module';

declare var ENV:string;

if ('production' === ENV) enableProdMode();
platformBrowserDynamic().bootstrapModule(LazyTabModule);