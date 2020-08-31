const testCompString = `<div class="buddhi--section-wrapper">
<div class="buddhi--section-title">Test Component</div>
<div class="buddhi--add-element-wrapper">
<div class="buddhi--add-element">
<button class="mdc-button buddhi--add-element-button">
<i class="material-icons mdc-button__icon" aria-hidden="true">add</i>
  <span class="mdc-button__label">Add Element</span>
</button>
</div>
</div>
</div>`;

const testCompString2 = `<div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
<div class="example-box" *ngFor="let movie of movies" cdkDrag>
    <div class="example-custom-placeholder" *cdkDragPlaceholder></div>
    {{movie}}
</div>
</div>`;

export const TEMPLATE_STRINGS = {
  testComp: testCompString,
  compBtn: testCompString2
};
