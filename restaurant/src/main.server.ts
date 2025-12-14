import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';

export default function bootstrap() {
  return bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []),
      provideServerRendering()
    ]
  });
}
