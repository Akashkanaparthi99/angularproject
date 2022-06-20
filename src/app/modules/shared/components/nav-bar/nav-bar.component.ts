import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SharedService } from '../../services/shared.service';

@Component({
 
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories!: Category[];
  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.getCategories().subscribe(
      {
        next: (data) => this.categories = data,
      }
    );
  }


}
