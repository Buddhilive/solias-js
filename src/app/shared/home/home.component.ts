import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedModule } from '../shared.module';
import { LayoutService } from 'src/app/core/layout.service';

@Component({
  selector: 'solias-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileUrls: any;

  constructor(
    public _authService: AuthService,
    public fileServer: LayoutService
    ) { }

  ngOnInit() {
    this.fileUrls = this.fileServer.getUrl();
    console.log(this.fileServer.fileUrl);
  }

}
