import { app } from './app.module';
// this is the container module for all "common components"
export const common = angular   
    .module('common', [
        app
    ])
    .run()
    .name;