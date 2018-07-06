import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public Message;
  @Output() public Mess2 = new EventEmitter();
  public Send(){
    this.Mess2.emit('Hello from child compoenet');
  }
  constructor() { }

  ngOnInit() {
  }

}
