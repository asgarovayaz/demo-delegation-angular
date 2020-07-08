import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CountryDataService, ICountry } from '@delegation/services/country.data.service';
import { CurrencyDataService, ICurrency } from '@delegation/services/currency.data.service';
import { DisciplinesDataService, IDiscipline } from '@delegation/services/disciplines.data.service';

@Component({
  selector: 'app-add-new-project-modal',
  templateUrl: './add-new-project-modal.component.html'
})
export class AddNewProjectModalComponent implements OnInit {
  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  country: ICountry[];
  selectedCountry = 'AZE';
  selectedLocation = 'AZE';
  selectedPeople = [{ name: 'Azerbaijan' }];

  discipline: IDiscipline[];
  selectedDiscipline = 'Rhythmic Gymnastics';

  currency: ICurrency[];
  selectedCurrency = 'EUR';

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };

  constructor(
    private modalService: BsModalService,
    private selectCountryService: CountryDataService,
    private selectDisciplineService: DisciplinesDataService,
    private selectCurrencyService: CurrencyDataService
    ) {
      this.country = selectCountryService.country;
      this.discipline = selectDisciplineService.discipline;
      this.currency = selectCurrencyService.currency;
  }

  ngOnInit() {

  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
