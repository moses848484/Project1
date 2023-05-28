import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'dateofbirth',
    'gender',
    'numberofcourses',
    'namesofcourses',
    'mobilenumber',
    'nextofkin',
    'nextofkinmobilenumber',
    'payment',
    'balance',
    'action',
    ];
       dataSource!: MatTableDataSource<any>;
       @ViewChild(MatPaginator) paginator!: MatPaginator;
       @ViewChild(MatSort) sort!: MatSort;

       accessdata: any;
       haveedit = true;
       haveadd = true;
       havedelete = true;
  constructor(
    private _authService: AuthService,
    private toastr:ToastrService,
    private _dialog: MatDialog,
    private _coreService: CoreService,
    private router: Router) {

    this.SetAccesspermission();

  }

  ngOnInit(): void {
    this.getcustomerlist()
  }

  addcustomer() {
    this.OpenDialog('800ms', '500ms');
  }
  OpenDialog(enteranimation: any, exitanimation: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
  });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getcustomerlist();
        }
      },
    });
  }

  getcustomerlist() {
    this._authService.getcustomerlist().subscribe({next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  SetAccesspermission() {
    this._authService.Getaccessbyrole(this._authService.getrole(), 'customer').subscribe(res => {
      this.accessdata = res;
      //console.log(this.accessdata);

      if(this.accessdata.length>0){
        this.haveadd=this.accessdata[0].haveadd;
        this.haveedit=this.accessdata[0].haveedit;
        this.havedelete=this.accessdata[0].havedelete;
        this.getcustomerlist();
      }else{
        alert('you are not authorized to access.');
        this.router.navigate(['']);
      }

    });
  }


  updatecustomer(data:any) {
    this.OpenDialog1('800ms', '500ms', data);
  }
OpenDialog1(enteranimation: any, exitanimation: any,data:any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {enterAnimationDuration: enteranimation,
      exitAnimationDuration: enteranimation,
      width: '30%',
   data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getcustomerlist();
        }
      },
    });
  }
  removecustomer(id: number) {
    this._authService.removecustomer(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Customer deleted!', 'done');
        this.getcustomerlist();
      },
      error: console.log,
    });
  }
}





