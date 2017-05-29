import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExampleModule }          from './example.module';

declare var ENV:string;

if ('production' === ENV) enableProdMode();
platformBrowserDynamic().bootstrapModule(ExampleModule);