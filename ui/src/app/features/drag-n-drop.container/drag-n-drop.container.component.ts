/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/data/model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { DragNDropFacade } from './drag-n-drop.facade';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-drag-n-drop-container',
  template: `
    <app-drag-n-drop
      [model]="model$ | async"
      [data]="data$ | async"
      (recognizeFace)=recognizeFace($event)>
   </app-drag-n-drop>`
})
export class DragNDropContainerComponent implements OnInit {
  model$: Observable<Model>;
  private store: Store<AppState>;
  data$: Observable<string>;

  constructor(private dragNdropFacade: DragNDropFacade) {}

  ngOnInit() {
    this.model$ = this.dragNdropFacade.model$;
    this.data$ = this.dragNdropFacade.testData$;
  }

  recognizeFace(file: any, model: Model) {
    this.dragNdropFacade.recognizeFace(model, file);
  }
}