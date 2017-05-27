import { enableProdMode }       from '@angular/core';
import { platformBrowser }      from '@angular/platform-browser';
import { ChildModuleNgFactory } from './child.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(ChildModuleNgFactory).catch((e) => console.log(e));