import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { Kitten } from 'src/app/shared/models/kitten';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-kittens-list',
  templateUrl: './kittens-list.component.html',
  styleUrls: ['./kittens-list.component.scss']
})
export class KittensListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public kittens: any[] = [];
  public dataSource: MatTableDataSource<Kitten>;
  public tableColumns: string[] = ['_id', 'kitten_name', 'kitten_breed', 'country', 'kitten_parents', 'kitten_dob', 'actions'];

  constructor(
    private kittensApi: ApiService,
  ) { }

  public ngOnInit(): void {
    this.kittensApi
      .getAllKittens()
      .subscribe(data => {
        this.kittens = data;
        this.dataSource = new MatTableDataSource<Kitten>(this.kittens);
        setTimeout(() => this.dataSource.paginator = this.paginator, 0);
    });
  }

  public deleteKitten(index: number, event: any): void {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
    this.kittensApi.removeKitten(event._id).subscribe();
  }
}
