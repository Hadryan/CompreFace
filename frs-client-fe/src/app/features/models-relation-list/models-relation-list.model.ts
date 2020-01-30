import { NgModule } from '@angular/core';
import { ModelRelationListFacade } from './model-relation-list-facade'
import { ModelsRelationListComponent } from './models-relation-list.component';
import { CommonModule } from '@angular/common';
import { UserTableModule } from '../user-table/user-table.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ModelsRelationListComponent],
  providers: [ModelRelationListFacade],
  imports: [CommonModule, UserTableModule, SpinnerModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, ReactiveFormsModule],
  exports: [ModelsRelationListComponent]
})
export class ModelRelationListModule {}
