// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Shorcut } from "src/app/components/view/shorcut/shorcut.component";

export const environment = {
  production: true,
  title: "Family Feud",
  subtitle: "Your Edition",
  host: "Steve Harvey",

  // Keys for the buzzers
  buzzer1: {
    keyCode: "Numpad1", // Used to detect the keypress
    menuDescription: new Shorcut("Buzzer Left", ["Numpad 1"]) //Appears in the help in the menu
  },
  buzzer2: {
    keyCode: "Numpad2", // Used to detect the keypress
    menuDescription: new Shorcut("Buzzer Right", ["Numpad 2"]) //Appears in the help in the menu
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
