import { Component, OnInit } from '@angular/core';
import { CountryDataService, ICountry } from '@delegation/services/country.data.service';
import { CurrencyDataService, ICurrency } from '@delegation/services/currency.data.service';
import { DisciplinesDataService, IDiscipline } from '@delegation/services/disciplines.data.service';

@Component({
  selector: 'app-project-detail-settings',
  templateUrl: './project-detail-settings.component.html'
})
export class ProjectDetailSettingsComponent implements OnInit {

  country: ICountry[];
  selectedCountry = 'AZE';
  selectedLocation = 'AZE';
  selectedPeople = [{ name: 'Azerbaijan' }];

  discipline: IDiscipline[];
  selectedDiscipline = 'Rhythmic Gymnastics';

  currency: ICurrency[];
  selectedCurrency = 'EUR';


  // tslint:disable-next-line: variable-name
  editor_module = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' }
      ],
      ['clean']
    ]
  };

  constructor(
    private selectCountryService: CountryDataService,
    private selectDisciplineService: DisciplinesDataService,
    private selectCurrencyService: CurrencyDataService
  ) {
      this.country = selectCountryService.country;
      this.discipline = selectDisciplineService.discipline;
      this.currency = selectCurrencyService.currency;
  }

  ngOnInit(): void {
  }

}
