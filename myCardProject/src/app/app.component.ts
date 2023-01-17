import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:"Doğa Yürüyüşü",imageUrl:"assets/tree.jpeg",userName:"@cbdoga",content:"Hadi biraz maçka parkında turlayalım"},
    {title:"Tırmanış",imageUrl:"assets/mountain.jpeg",userName:"@cbuludag",content:"Hızlı bir tırmanış etkinliği"},
    {title:"Dağ bisikleti",imageUrl:"assets/biking.jpeg",userName:"@cbbisiklet",content:"Yarışlar hız ve huzur."}
  ]
}
