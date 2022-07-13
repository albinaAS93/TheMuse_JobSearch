import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;

  data: any;
  offersList: any;
  @ViewChild('select') select!: ElementRef;
  selectedLevel: string = "all";
  page: number = 1;

  constructor(public service: GetDataService) { }

  ngOnInit(): void {
    this.jobs();
  }

  jobs(): void {
    this.service.getJobs(this.page).subscribe((res: any) => {
      this.data = res;
      this.offersList = this.data.results;
    });
  }

  changeLevel(level_page: number) {
    this.page = level_page;
    this.selectedLevel = this.select.nativeElement.value;
    this.service.getLevel(this.selectedLevel, this.page).subscribe((res: any) => {
      this.data = res;
      this.offersList = this.data.results;
    });
  }

}
