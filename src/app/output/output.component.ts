import { Component } from '@angular/core';
import { MyService } from '../my.service';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { User } from '../user';
import { Albums } from '../albums';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-output',
  standalone: true,
  providers: [MyService],
  imports: [HttpClientModule, CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  user: User| undefined;
  users: User[]=[];
  albums: Albums[] = [];
  constructor(private myServ: MyService){}

  ngOnInit(){

    this.myServ.getUsers().subscribe({next:(data: User[]) => this.users=data});
    this.myServ.getAlbums().subscribe({next: (albumData: Albums[]) => {console.log('Albums received from service:', albumData);
    this.albums = albumData;
      }
});
}
}
