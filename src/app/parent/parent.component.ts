import { Component, Input } from '@angular/core'
import { Obj } from './child/child.component'

export interface User {
  name: string
  surname: string
  from: string
  age: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  grades: string[] = ['n', 'cjnjief']
  getGrade(value: string) {
    this.grades.push(value)
  }
}
