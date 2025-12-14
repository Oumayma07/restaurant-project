import 'zone.js';                    // ⭐ OBLIGATOIRE pour Angular basé sur Zone.js
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig);
