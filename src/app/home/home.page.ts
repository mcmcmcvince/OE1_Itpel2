import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'The Eiffel Tower';

  onChangeText(){
    this.text = 'The Eiffel Tower was built by Gustave Eiffel for the 1889 Worlds Fair in Paris.';

  }
  onOriginalText(){
    this.text = 'It was built to celebrate the centennial of the French Revolution';
  }

}
