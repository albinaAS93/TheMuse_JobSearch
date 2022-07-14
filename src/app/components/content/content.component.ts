import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

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

  NextPage(){

    this.page = this.page + 1;

    if (this.selectedLevel == "all"){
      this.jobs();
    }else{
      this.changeLevel(this.page);
    }

  }

  PreviousPage(){

    if(this.page > 1){
      this.page = this.page - 1;

      if (this.selectedLevel == "all"){
        this.jobs();
      }else{
        this.changeLevel(this.page);
      }
    }

  }
}
