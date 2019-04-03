import { Injectable } from '@angular/core';
import { Scale } from '../models/scale';
import { Tone } from '../models/tone';

@Injectable({
  providedIn: 'root'
})
export class GetScaleByToneService {

  private scale: Scale;
  constructor() {
    this.scale = new Scale();
  }


  getScale() {
    switch (this.getRandomScaleID()) {
      case 1:
        this.scale.tones = [{ name: "C", grade: "I" },
        { name: "D", grade: "II", },
        { name: "E", grade: "III" },
        { name: "F", grade: "IV", },
        { name: "G", grade: "V" },
        { name: "A", grade: "VI", },
        { name: "B", grade: "VII", }
        ];
        break;
      case 2:
        this.scale.tones = [{ name: "Db", grade: "I" },
        { name: "Eb", grade: "II", },
        { name: "F", grade: "III" },
        { name: "Gb", grade: "IV", },
        { name: "Ab", grade: "V" },
        { name: "Bb", grade: "VI", },
        { name: "C", grade: "VII", }
        ];
        break;
      case 3:
        this.scale.tones = [{ name: "D", grade: "I" },
        { name: "E", grade: "II", },
        { name: "F#", grade: "III" },
        { name: "G", grade: "IV", },
        { name: "A", grade: "V" },
        { name: "B", grade: "VI", },
        { name: "C#", grade: "VII", }
        ];
        break;
      case 4:
        this.scale.tones = [{ name: "Eb", grade: "I" },
        { name: "F", grade: "II", },
        { name: "G", grade: "III" },
        { name: "Ab", grade: "IV", },
        { name: "Bb", grade: "V" },
        { name: "C", grade: "VI", },
        { name: "D", grade: "VII", }
        ];
        break;
      case 5:
        this.scale.tones = [{ name: "E", grade: "I" },
        { name: "F#", grade: "II", },
        { name: "G#", grade: "III" },
        { name: "A", grade: "IV", },
        { name: "B", grade: "V" },
        { name: "C#", grade: "VI", },
        { name: "D#", grade: "VII", }
        ];
        break;
      case 6:
        this.scale.tones = [{ name: "F", grade: "I" },
        { name: "G", grade: "II", },
        { name: "A", grade: "III" },
        { name: "Bb", grade: "IV", },
        { name: "C", grade: "V" },
        { name: "D", grade: "VI", },
        { name: "E", grade: "VII", }
        ];
        break;
      case 7:
        this.scale.tones = [{ name: "F#", grade: "I" },
        { name: "G#", grade: "II", },
        { name: "A#", grade: "III" },
        { name: "B", grade: "IV", },
        { name: "C#", grade: "V" },
        { name: "D#", grade: "VI", },
        { name: "E#", grade: "VII", }
        ];
        break;
      case 8:
        this.scale.tones = [{ name: "G", grade: "I" },
        { name: "A", grade: "II", },
        { name: "B", grade: "III" },
        { name: "C", grade: "IV", },
        { name: "D", grade: "V" },
        { name: "E", grade: "VI", },
        { name: "F#", grade: "VII", }
        ];
        break;
      case 9:
        this.scale.tones = [{ name: "Ab", grade: "I" },
        { name: "Bb", grade: "II", },
        { name: "C", grade: "III" },
        { name: "Db", grade: "IV", },
        { name: "E", grade: "V" },
        { name: "F", grade: "VI", },
        { name: "G", grade: "VII", }
        ];
        break;
      case 10:
        this.scale.tones = [{ name: "A", grade: "I" },
        { name: "B", grade: "II", },
        { name: "C#", grade: "III" },
        { name: "D", grade: "IV", },
        { name: "E", grade: "V" },
        { name: "F#", grade: "VI", },
        { name: "G#", grade: "VII", }
        ];
        break;
      case 11:
        this.scale.tones = [{ name: "Bb", grade: "I" },
        { name: "C", grade: "II", },
        { name: "D", grade: "III" },
        { name: "Eb", grade: "IV", },
        { name: "F", grade: "V" },
        { name: "G", grade: "VI", },
        { name: "A", grade: "VII", }
        ];
        break;
      case 12:
        this.scale.tones = [{ name: "B", grade: "I" },
        { name: "C#", grade: "II", },
        { name: "D#", grade: "III" },
        { name: "E", grade: "IV", },
        { name: "F#", grade: "V" },
        { name: "G#", grade: "VI", },
        { name: "A#", grade: "VII", }
        ];
        break;
    }

    return this.scale;
  }



  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomScaleID() {
    return this.randomIntFromInterval(1, 12);
  }

  getRandomGrade(){
    return this.randomIntFromInterval(1,7);
  }
}
