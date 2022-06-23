import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: `<ejs-dropdownlist id='dropdwonlist_country' [dataSource]='countryData' [fields]='countryFields' placeholder='Select a country' popupHeight='200px' popupWidth='250px' ></ejs-dropdownlist>`
})
export class AppComponent {
  title = 'Tour of Heros';

  //public countryFields: Object = {text: 'CountryName', value: 'CountryId'};

 // public countryData: Object[] = [
   // {CountryName: 'USA', CountryId:'1'},
    //{CountryName: 'Taiwan', CountryId:'2'}
 // ];
}
