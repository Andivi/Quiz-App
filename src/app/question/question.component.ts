import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
customize: FormGroup;
category: String | undefined;
  constructor(
    private formBuilder:  FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
  
  ) { 
    this.customize = this.formBuilder.group({
      level: null, limit:null
    })
     this.route.queryParams.subscribe(
      (param: any) => {this.category = param.get("name")}
    )
  
  }

  ngOnInit(): void {
    
  }
  getQuestions(){
    const formData = this.customize.getRawValue();
    return this.http.get('https://quizapi.io/api/v1/questions ?apiKey=a4GFCLHlHfDdpZkHRNWtoEtXlyNzmBiD1iqFIm57');
  }

}
