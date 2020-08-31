import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CdkDragDrop, moveItemInArray, DragDrop } from '@angular/cdk/drag-drop';
import { TEMPLATE_STRINGS } from './templates/template.const';

@Component({
  selector: 'solias-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('editor', { static: false }) editorComp: ElementRef;

  constructor(
    public _authService: AuthService,
    private dragger: DragDrop,
    private renderer: Renderer2) { }

  ngOnInit() {
  }

  addElement(madeComp) {
    madeComp.addEventListener('click', (elRef) => {
      const getContainer = elRef.target.parentNode;
      let finalEl;
      getContainer.classList.forEach((comRef) => {
        if (comRef == 'buddhi--add-element') {
          finalEl = getContainer;
        } else {
          finalEl = getContainer.parentNode;
        }
      });

      const compParent = finalEl.parentNode;
      finalEl.parentNode.innerHTML += `<div class="solias--element"><p>Namo Buddhaya</p></div>`;
      this.addElement(compParent.parentNode.querySelector('.buddhi--add-element-button'));

      //elRef.target.innerHTML = TEMPLATE_STRINGS.testComp;
      console.log(compParent);
    });
  }

  addHTML() {
    this.editorComp.nativeElement.focus();
    this.editorComp.nativeElement.innerHTML += TEMPLATE_STRINGS.testComp;
    const elementWrapper = this.editorComp.nativeElement.querySelectorAll('.buddhi--section-wrapper');
    elementWrapper.forEach((dragElement) => {
      this.dragger.createDrag(dragElement);
    });

    this.editorComp.nativeElement.querySelectorAll('.buddhi--add-element-button').forEach((madeComp) => {
      this.addElement(madeComp);
    });
  }

  onDropOver(event: CdkDragDrop<string[]>) {
    const movies = this.editorComp.nativeElement.querySelectorAll('.buddhi--section-wrapper');
    moveItemInArray(movies, event.previousIndex, event.currentIndex);
    console.log(event);
  }

  testFunc() {
    console.log(this.editorComp.nativeElement.innerHTML);
  }

}
