import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TablesService } from '../services/tables.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MentorElement {
  id: string;
  name: string;
  type: string;
  entity: string;
  status: string;
}

export interface Status {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: MentorElement[] = [];

export interface DialogData {
  id: any;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  position: string;
  user_status: string;
  office_phone: string;
  direct_line: string;
  mobile_phone: string;
  entity: string;
  company: {
    name: string;
    user_type: string;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'entity', 'status', 'id'];
  displayedFilter: string[] = ['name-filter', 'type-filter', 'entity-filter', 'status-filter'];
  listStatus: any[] = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'active', viewValue: 'Active' },
  ];
  listEntity: Status[] = [
    { value: 'company', viewValue: 'Company' },
    { value: 'mentor', viewValue: 'Mentor' },
    { value: 'student', viewValue: 'Student' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private tableServ: TablesService, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.getData();
  }

  applyFilterName(filter: Event) {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toString().includes(filter);
    };

    const filterValue = (filter.target as HTMLInputElement).value;
    console.log(this.dataSource);

    this.dataSource.filter = filterValue.trim();
  }

  applyFilterType(filter: Event) {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.type.toString().includes(filter);
    };

    const filterValue = (filter.target as HTMLInputElement).value;
    console.log(filterValue);

    this.dataSource.filter = filterValue.trim();
  }

  applyFilterEntity(filter: string) {
    console.log(filter);
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.entity.toString().includes(filter);
    };


    this.dataSource.filter = filter.trim();
  }

  applyFilterStatus(filter: string) {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.status.toString().includes(filter);
    };
    ;

    this.dataSource.filter = filter.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource);

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData() {
    this.tableServ.getTableData().subscribe((data: any) => {
      data.forEach((element: any) => {
        console.log(element._id);
        ELEMENT_DATA.push({
          id: element.id ?? element._id,
          name: element.last_name + " " + element.first_name + " " + element.civility,
          type: element.company.user_type,
          entity: element.company.name,
          status: element.user_status
        });
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      })
    });
  }

  delete(id) {
    console.log(id);

    this.tableServ.deleteTableData(id).subscribe((data: any) => {
      console.log(data);
      location.reload();
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTable, {
      width: '1000px',
      data: {
        id: '',
        email: '',
        civility: '',
        first_name: '',
        last_name: '',
        position: '',
        office_phone: '',
        user_status: '',
        direct_line: '',
        mobile_phone: '',
        entity: '',
        company: {
          name: '',
          user_type: ''
        },

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'table-dialog',
  templateUrl: './table-dialog.component.html',
})
export class DialogTable {
  listStatus: any[] = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'active', viewValue: 'Active' },
  ];
  listCivility: any[] = [
    { value: 'mr', viewValue: 'Mr' },
    { value: 'mrs', viewValue: 'Mrs' },
  ];
  listEntity: Status[] = [
    { value: 'company', viewValue: 'Company' },
    { value: 'mentor', viewValue: 'Mentor' },
    { value: 'student', viewValue: 'Student' },
  ];
  listUserType: Status[] = [
    { value: 'company', viewValue: 'Company' },
    { value: 'mentor', viewValue: 'Mentor' },
    { value: 'student', viewValue: 'Student' },
  ];
  listCompany: Status[] = [
    { value: 'company-1', viewValue: 'Company 1' },
    { value: 'company-2', viewValue: 'Company 2' },
    { value: 'company-3', viewValue: 'Company 3' },
  ];


  constructor(
    private tableServ: TablesService,
    public dialogRef: MatDialogRef<DialogTable>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    // this.data._id = dataS
    var length = ELEMENT_DATA.length;
    // var form = [];
    this.data.id = length + 1;
    this.data.id = this.data.id.toString();
    console.log(this.data);
    this.data.user_status = 'pending';
    this.tableServ.postTableData(this.data).subscribe((data: any) => {
      location.reload();
    });
  }
}
