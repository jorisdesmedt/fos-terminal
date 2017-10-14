import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public showPayment: boolean = false;

  constructor(private db: AngularFireDatabase) {
    // db.object('showPaymentScreen').valueChanges().subscribe((value: boolean) => {
    //   this.showPayment = value;
    // });
  }

  ngOnInit() {
  }

  @HostListener('document:keyup', ['$event'])
  public clicked(event: KeyboardEvent) {
    if (event.which === 13) {
      this.showPayment = true;
    }
  }

}
