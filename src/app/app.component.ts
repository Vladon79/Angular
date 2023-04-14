import { Component } from '@angular/core'

interface IUser {
  id: number
  name: string
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Instagram'
  user: IUser = {
    id: 1,
    name: 'vlad',
  }

  text = ''
  text1 = 'dd'

  isLoading = true

  changeTitleHandler() {
    this.title = 'inst'
  }

  chInp(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
