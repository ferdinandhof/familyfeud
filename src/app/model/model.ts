export class State { 
    public screen = Screen.start
    public rounds: Round[] = []
    public currentRound = Round.dummy()
    public roundIndex = -1
    public tempScore = 0
    public instructionStep = 0

    public team1 = new Team("Team 1", "#FF454E")
    public team2 = new Team("Team 2", "#71d2ff")

    reset() {
        this.screen = Screen.start
        this.rounds.forEach( r => r.reset() )
        this.currentRound = Round.dummy()
        this.roundIndex = -1
        this.tempScore = 0
        this.instructionStep = 0
    }

    resetTeams() {
        this.team1.score = 0
        this.team1.strikes = 0
        this.team2.score = 0
        this.team2.strikes = 0
    }
}

export enum Screen {
    start = 0,
    intro = 1,
    instructions = 2,
    round = 3,
    end = 4
  }

export class Team {
    public strikes = 0
    public score = 0
    constructor(public name: string, public color: string) {}
}


export class Round {
    public isHidden = true
    public isQuestionRevealed = false
    public isFullyRevealed = false
    constructor(public question: string, public answers: Answer[]) {}

    static dummy(): Round {
        const l = new Round("", [])
        l.isHidden = false
        l.isQuestionRevealed = true
        l.isFullyRevealed = true
        return l
    }

    static parse(json: any): Round[] {
        const array = json["rounds"]
        const rounds = array.map( (data: any) => { 
            return new Round(data["name"], Answer.parse(data))
        })
        console.log(rounds)
        return rounds
    }

    isVisited(): boolean {
        for (const answer of this.answers) {
            if (!answer.isHidden) {
                return true
            }
        }
        return false
    }

    reset() {
        this.isHidden = true
        this.isQuestionRevealed = false
        this.isFullyRevealed = false

        this.answers.forEach( a => a.reset() )
    }
}

export class Answer {
    public isHidden = true
    public isRevealed = false
    constructor(public text: string, public amount: number) {}

    static parse(json: any): Answer[] {
        const array = json["answers"]
        const answers = array.map( (data: any) => { 
            return new Answer(data["text"], data["amount"])
        })
        return answers
    }

    reset() {
        this.isHidden = true
        this.isRevealed = false
    }
}

export const allRounds = []