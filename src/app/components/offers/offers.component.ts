import { Component, OnInit, Input  } from '@angular/core';

import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  @Input() offer: any;

  constructor(private OfferService: OfferService) { }

  ngOnInit(): void { }

  moreInfo(){
    this.OfferService.updateData(this.offer);
  }

}
