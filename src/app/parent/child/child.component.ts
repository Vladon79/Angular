import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../parent.component'

export interface Obj {
  math: number
  ph: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  inputGrade = ''
  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
  }
}
