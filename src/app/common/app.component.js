import templateUrl from './app.html';

export const appComponent = {
    templateUrl,
    controller: class AppComponent {
        
        constructor(){
            'ngInject';

            this.user = "Ashley!";
        }

        logout() {
            console.log('loggedout!');
        }

    }
}