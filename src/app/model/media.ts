
export enum Sound {
  theme, win, buzzer, correct, wrong, ding, click
}

export enum Music {
  game, millionaire, jazz
}

export class MediaState {
  
  public audios: HTMLAudioElement[] = []
  public currentMusic: Music | null = null
  public get musicIsPlaying(): boolean {
    if(this.currentMusicElement == null) {
      return false
    } else {
      return !this.currentMusicElement.paused
    }
  }
  public get isFullVolume(): boolean {
    if(this.currentMusicElement == null) {
      return true
    } else {
      return this.currentMusicElement.volume >= 0.99
    }
  }
  currentMusicElement: HTMLAudioElement | null = null
  tempMusicVol = -1.0
  isMusicDucked = false

  // Sounds
  getAudio(sound: Sound): HTMLAudioElement {
    return Media.load(Media.fileNameForSound(sound), "sounds")
  }

  playSound(sound: Sound) {
    const audio = this.getAudio(sound)
    audio.play()
  } 

  // Music
  playMusic(music: Music) {
    this.isMusicDucked = false
    this.stopMusic()
    this.currentMusic = music
    this.currentMusicElement = Media.load(Media.fileNameForMusic(music), "music")
    this.currentMusicElement!.loop = true
    this.currentMusicElement!.currentTime = 0
    this.currentMusicElement!.volume = 0.3
    this.resumeMusic()
  }

  stopMusic() {
    this.pauseMusic()
    this.currentMusic = null
    this.currentMusicElement = null
  }

  resumeMusic() {
    this.currentMusicElement?.play()
  }

  pauseMusic() {
    this.currentMusicElement?.pause()
  }

  playPauseMusic() {
    if(this.currentMusicElement?.paused == true) {
      this.resumeMusic()
    } else {
      this.pauseMusic()
    }
  }

  // Volume
  volumeUp() {
    this.multiplyVolume(1.4)
  }

  volumeDown() {
    this.multiplyVolume(0.700)
  }

  get volume(): number {

    const value = this.currentMusicElement?.volume
    if(value) {
      // Volume is not linear so make it look somewhat linear
      // This does not affect volume up or down
      return Math.sqrt(1 - Math.pow(value - 1, 2));
    } else {
      return 1
    }
    
  }

  private multiplyVolume(factor: number) {
    if (this.currentMusicElement != null) {
      this.currentMusicElement.volume *= factor
    }
  }

  // Extra
  toggleDuckMusic() {
    if(!this.isMusicDucked) {
      this.tempMusicVol = this.currentMusicElement?.volume ?? 0.1
    }
    this.duckMusic(!this.isMusicDucked)
  }

  duckMusic(shouldDuck = false) {
    this.isMusicDucked = shouldDuck
    if (this.currentMusicElement != null) {
      this.currentMusicElement.volume = shouldDuck ? (this.tempMusicVol * 0.1) : this.tempMusicVol
    }
  }


}


class Media {
  
  static load(soundName: string, directory: string): HTMLAudioElement{
    let audio = new Audio();
    audio.src = `../assets/${directory}/${soundName}`
    audio.load()
    return audio
  }

  static fileNameForMusic(music: Music): any {
    switch(music) {
      case Music.game: return "gamemusic.mp3"
      case Music.millionaire: return "millionairemusic.mp3"
      case Music.jazz: return "jazzmusic.mp3"
    }
  }

  static fileNameForSound(sound: Sound): any {
    switch(sound) {
      case Sound.theme: return "theme.mp3"
      case Sound.win: return "win.m4a"
      case Sound.buzzer: return "buzzer.m4a"
      case Sound.correct: return "correct.m4a"
      case Sound.wrong: return "wrong.m4a"
      case Sound.ding: return "ding.m4a"
      case Sound.click: return "click.m4a"
    }
  }

  
}