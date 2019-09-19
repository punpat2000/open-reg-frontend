import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() placeholder: string = null;
  @Input() name: string = null; 
  constructor() {}

  ngOnInit() {}
}