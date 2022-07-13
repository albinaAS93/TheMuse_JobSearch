import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  offer: any;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.currentData.subscribe((e) => {
      this.offer = e;
    })
  }

}
