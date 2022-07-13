import { Component, Input, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job:any;

  constructor(private jobService: JobServiceService) { }

  ngOnInit(): void {
  }

  jobDetailInfo() {
    this.jobService.updateData(this.job);
  }
}
