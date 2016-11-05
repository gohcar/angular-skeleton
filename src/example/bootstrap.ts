import { enableProdMode }    from '@angular/core';
import { platformBrowser }   from '@angular/platform-browser';

import { ExampleModuleNgFactory } from './example.module.ngfactory';

declare var ENV:string;

if ('production' === ENV) enableProdMode();

platformBrowser().bootstrapModuleFactory(ExampleModuleNgFactory);