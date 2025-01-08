import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTable } from '@ngx/table';

@Component({
	imports: [CommonModule, NgxTable, ReactiveFormsModule],
	selector: 'header-loading-state-demo',
	templateUrl: './header-loading-state.demo.component.html',
})
export class HeaderLoadingStateDemoComponent {}
