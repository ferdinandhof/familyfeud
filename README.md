# FamilyFeud
This is an angular app which provides picture and sound to host a family feud party with your friends.
It contains a catalog of 100 questions which is easily expandable. Simply install the app and run it in a chrome browser.
Control the app with your keyboard and optionally with buzzers mapped to certain keys. 
The app contains all the iconic sounds from the real show and three different styles of background music to go along with it.

## Run the app
1. Install [node.js](https://nodejs.org/en/), then [angular.cli](https://angular.io/cli) `npm install -g @angular/cli`
2. Navigate to the the project folder and install all dependencies `npm i`.
3. Run `ng serve` for a webserver which hosts the app.
4. Open the app in Chrome. Or run Chrome in Kiosk mode (see below)

### Start Chrome Kiosk
Run `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --app=http://localhost:4200` in terminal.

### Menu
Use `ESC` to open the in app menu which will let you control the app while using.

| Shortcut                  | Keys            | Comments                                                                |
| ------------------------- | --------------- | ----------------------------------------------------------------------- |
| Menu                      | `ESC`           |                                                                         |
| Advance                   | `Space`         | Advances to next screen (start, intro, instructions, round)             |
| Select Team 1             | `←`             | Select Team 1 and makes it eligible for any actions                     |
| Select Team 2             | `→`             | Select Team 2 and makes it eligible for any actions                     |
| Increase Score            | `↑`             | Needs a team selected                                                   |
| Decrease Score            | `↓`             | Needs a team selected                                                   |
| Buzzer 1                  | `Numpad 1`      | Selects and buzzes for team 1, the key for this can be configured       |
| Buzzer 2                  | `Numpad 2`      | Selects and buzzes for team 1, the key for this can be configured       |
|                           |                 |                                                                         |
| Reveal Answer #           | `1-8`           | Reveals an answer on the board                                          |
| Reveal Answer #           | `Shift`, `1-8`  | Closes an answer on the board again                                     |
| Toggle Reveal All Answers | `Shift`, `A`    | Reveals all answer with an animation                                    |
| Strike                    | `X`             | Needs a team selected                                                   |
| Unstrike                  | `Shift`, `X`    | Needs a team selected                                                   |
| Credit Score              | `S`             | Gives the currently displayed score to a team. Needs a team selected    |
| Uncredit Score            | `Shift`, `S`    | Needs a team selected                                                   |
| Reset                     | `R`             | Resets to no team selected and buzzered                                 |
| Reset All                 | `Shift`, `R`    | Resets both teams' scores and rounds played                             |
|                           |                 |                                                                         |
| Music "Game"              | `⌥`, `1`        |                                                                         |
| Music "Millionaire"       | `⌥`, `2`        |                                                                         |
| Music "Jazz"              | `⌥`, `3`        |                                                                         |
| Playe/Pause Music         | `⌥`, `P`        |                                                                         |
| Duck Music                | `⌥`, `O`        | lowers the volume until unducked again                                  |
| Volume Up                 | `⌥`, `↑`        |                                                                         |
| Volume Down               | `⌥`, `↓`        |                                                                         |

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
