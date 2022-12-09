import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photos-searchbar',
  templateUrl: './photos-searchbar.component.html',
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent implements OnInit {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Input() public isLoading: Boolean | null = false;
  public inputSearch!: string;

  constructor() {}

  ngOnInit(): void {}
}
