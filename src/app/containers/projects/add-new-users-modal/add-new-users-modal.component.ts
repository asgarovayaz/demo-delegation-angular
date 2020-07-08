import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CountryDataService, ICountry } from '@delegation/services/country.data.service';
import { IRole, RolesDataService } from '@delegation/services/roles.data.service';

@Component({
  selector: 'app-add-new-users-modal',
  templateUrl: './add-new-users-modal.component.html'
})
export class AddNewUsersModalComponent implements OnInit {
  @ViewChild('UsersTemplate', { static: true }) template: TemplateRef<any>;

  country: ICountry[];
  selectedCountry = 'AZE';

  role: IRole[];
  selectedRole = '';

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };


  constructor(
    private modalService: BsModalService,
    private selectCountryService: CountryDataService,
    private selectRolesService: RolesDataService
    ) {
      this.country = selectCountryService.country;
      this.role = selectRolesService.role;
     }

  ngOnInit() {

  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
