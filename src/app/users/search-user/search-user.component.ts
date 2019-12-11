import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../data/user-data.model';
import { UsersServiceService } from '../users-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// * EXCEL
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-search',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, AfterViewInit {

  /* Mat-table Components */
  displayedColumns = ['firstName', 'lastName', 'name', 'email', 'key', 'profile', 'date'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild('scrollBottom', {static: false}) scrollBottom: ElementRef;
  isloading = true;
  user: User = null;
  userForm: FormGroup;
  isEditable = false;
  /* Export Componentns*/
  @ViewChild('TABLE', {static: false}) table: ElementRef;
  fileName = 'ExcelSheet.xlsx';


  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
    this.usersService.fetchUsers().subscribe((users: any) => {
      this.dataSource.data = users;
      this.isloading = false;
      this.isEditable = false;
    });
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClicked(user: User) {
    if (this.isEditable) {
      this.user = user;
      this.initForm();
      this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
      console.log( this.scrollBottom.nativeElement.scrollHeight  );
    }

  }

  private initForm() {
    // * Initing forms
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, { validators: [Validators.required] }),
      lastName: new FormControl(this.user.lastName, { validators: [Validators.required] }),
      name: new FormControl(this.user.name, { validators: [Validators.required] }),
      email: new FormControl(this.user.email, { validators: [Validators.required, Validators.email] }),
      key: new FormControl(this.user.key, { validators: [Validators.required] }),
      profile: new FormControl(this.user.profile, { validators: [Validators.required] })
    });
  }

  cancelSelection() {
    this.user = null;
  }

  changeToggle() {
    this.isEditable = !this.isEditable;
  }

  updateUser() {
  
    this.usersService.updateUser({
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      key: this.userForm.value.key,
      profile: this.userForm.value.profile,
      date: this.user.date,
      id: this.user.id
    });
    this.isEditable = false;
    this.user = null;
  }


  // **************************************************** //
  // ***         'EXPORTING TO EXCEL'                 *** //
  // **************************************************** //

  exportUsers() {
    /* Setting files data */
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
