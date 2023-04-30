import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public usersService: UsersService) {}
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;
  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.members = this.usersService.users.length;
    this.componentRef.instance.group = this.usersService.group;
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
