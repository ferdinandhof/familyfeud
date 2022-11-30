# FamilyFeud
This is an angular app which provides picture and sound to host a family feud party with your friends.
It contains a catalog of 100 questions which is easily expandable. Simply install the app and run it in a chrome browser.
Control the app with your keyboard and optionally with buzzers mapped to certain keys. 
The app contains all the iconic sounds from the real show and three different styles of background music to go along with it.

## Run the app
1. Install [node.js](https://nodejs.org/en/) and then [angular.cli](https://angular.io/cli) `npm install -g @angular/cli`
2. Install all dependencies `npm i`.
3. Run `ng serve` for a webserver which hosts the app.
4. Open the app in Chrome. Or run Chrome in Kiosk mode (see below)

### Start in Chrome Kiosk
Run `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --app=http://localhost:4200` in terminal.

### Menu
Use ESC to open the in app menu which will let you control the app while using.

## Configuration
Use the `src/environments/environment.ts` file to adjust the following settings:
* Title of your show ("Family Feud")
* Subtitle of your show ("Your Edition")
* The name of the host today ("Steve Harvey")
* Key for buzzer 1
* Key for buzzer 2

### Key definition
Key codes can be found here:
https://www.toptal.com/developers/keycode 
Just press a key and copy `event.code` to `keyCode`.
For the sake of completeness also add a shortcut description which will appear in the menu.
`Shortcut(title: string, keys: string[])`

```
  buzzer1: {
    keyCode: "Numpad1", // Used to detect the keypress
    menuDescription: new Shorcut("Buzzer Left", ["Numpad 1"]) //Appears in the help in the menu
  }
```

## Final Words
Get in the mood and watch a few Family Feud episodes to know how the game is played.
Don't forget: three XXX and the opponent can steal all your points!
