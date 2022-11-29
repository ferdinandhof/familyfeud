# FamilyFeud
This is a angular app to play family feud with all your friends.
It contains a catalog of 100 questions which is easily expandable.

## Run the app
Run `ng serve` for a dev server.
For best results open the app in Chrome.

### Start in Chrome Kiosk
Run `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --app=http://localhost:4200` in terminal.

### Menu
Use ESC to open the in app menu which will let you control the app while using.

## Configuration
Use the `src/environments/environment.ts` file to adjust the following settings:
* Title of your show ("Family Feud")
* Subtitle of your show ("Friends & Family edition")
* Host: the name of who ever is hosting the show ("Steve Harvey")
* Key for buzzer 1
* Key for buzzer 2

### Key definition
Key ids can be found here:
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
