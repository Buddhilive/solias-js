export const BLOCK_COMPONENTS = {
  grid: `<div class="mdl-grid"></div>`,
  grid_cell: `<div class="mdl-cell"></div>`,
  text_input: `<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
  <input class="mdl-textfield__input" type="text" id="sample3">
  <label class="mdl-textfield__label" for="sample3">Text...</label>
</div>`,
  navbar: `<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Title</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content"></div>
  </main>
</div>`,
button: `<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
Button
</button>`,
card: `<div class="mdl-card">
<div class="mdl-card__title">
   <h2 class="mdl-card__title-text">Auckland Sky Tower<br>Auckland, New Zealand</h2>
</div>
<div class="mdl-card__media">
  <img src="/assets/block_icons/card.svg" width="173" height="157" border="0" alt=""
   style="padding:10px;">
</div>
<div class="mdl-card__supporting-text">
The Sky Tower is an observation and telecommunications tower located in Auckland,
New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
in the Southern Hemisphere.
</div>
<div class="mdl-card__actions">
   <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
</div>
</div>`,
chips: `<span class="mdl-chip">
<span class="mdl-chip__text">Basic Chip</span>
</span>`,
slider: `<input class="mdl-slider mdl-js-slider" type="range"
min="0" max="100" value="0" tabindex="0">`,
checkbox: `<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
<input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked>
<span class="mdl-checkbox__label">Checkbox</span>
</label>`,
radiobutton: `<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
<input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>
<span class="mdl-radio__label">First</span>
</label>`,
switch: `<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
<input type="checkbox" id="switch-1" class="mdl-switch__input" checked>
<span class="mdl-switch__label"></span>
</label>`,
spinner: `<div class="mdl-spinner mdl-js-spinner is-active"></div>`,
footer: `<footer class="mdl-mega-footer">
</footer>`,
custom: `<div class="custom-component"><div>`
};
