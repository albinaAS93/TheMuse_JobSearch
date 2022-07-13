import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  offer: any;
  offerId!: string;
  companyData: any;
  company: any;

  constructor(
    private offerService: OfferService,
    public dataService: GetDataService
  ) { }

  ngOnInit(): void {

    this.offerService.currentData.subscribe((e) => {
      this.offer = e;
      this.offerId = this.company.id;
    })

    this.dataService.getCompany(this.offerId).subscribe((res: any) => {
      this.companyData = res;
    })

  }

}
