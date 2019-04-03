import { Component } from '@angular/core';
import { GetScaleByToneService } from '../services/get-scale-by-tone.service';
import { Tone } from '../models/tone';
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Scale } from '../models/scale';

const OK_MESSAGE: string = "Correcto!";
const KO_MESSAGE: string = "Incorrecto"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  scale_text: String;
  tone_text: String;
  rigthAnswer: String;
  grades: Array<String>;

  constructor(private service: GetScaleByToneService, private alertController: AlertController, private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#212121');
    this.scale_text = "";
    this.tone_text = "";
    this.grades = ["I", "II", "III", "IV", "V", "VI", "VII"];

    this.setTone();


  }

  async showMessage(msg: string) {
    const alert = await this.alertController.create({
      header: msg,
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            if (msg == OK_MESSAGE) {
              this.setTone();
            }
          }
        }
      ]
    });

    await alert.present();
  }


  evaluateAnswer(answer: String) {
    if (answer == this.rigthAnswer)
      this.showMessage(OK_MESSAGE);
    else
      this.showMessage(KO_MESSAGE);
  }

  setTone() {
    let scale:Scale = this.service.getScale();
    this.scale_text = scale.tones[0].name;

    let randomToneFromScale:Tone = scale.tones[this.service.getRandomGrade()];


    this.tone_text = randomToneFromScale.name;

    this.rigthAnswer = randomToneFromScale.grade;
  }
}
