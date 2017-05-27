import { enableProdMode }         from '@angular/core';
import { platformBrowser }        from '@angular/platform-browser';
import { ExampleModuleNgFactory } from './example.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(ExampleModuleNgFactory);