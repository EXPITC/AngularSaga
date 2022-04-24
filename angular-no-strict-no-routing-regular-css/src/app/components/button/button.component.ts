import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; //see
  @Input() color: string = 'black'; //the different right
  @Output() btnClick = new EventEmitter()
  constructor() {}

  ngOnInit(): void { }
  
  onClick(): void {
    // console.log('Hey there');
    this.btnClick.emit();
  }
}
