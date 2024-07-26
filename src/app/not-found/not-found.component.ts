import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  @Input() visible:boolean = false;
  @Input() NotFoundMessage:String = 'Nothing Found !';
  @Input() resetLinlText:string = 'Reset';
  @Input() resetLinkRoute:string = '/';

constructor(){
  
}
ngOnInit(): void {
  
}



}
