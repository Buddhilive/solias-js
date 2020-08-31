import { BLOCK_COMPONENTS } from './blocks.const';
import { COMPONENT_IMAGE } from './blocks.images';

export const BLOCK_COMPONENTS_ARRAY = [
  {
    id: 'button', // id is mandatory
    label: `<i class="material-icons">
    crop_7_5
    </i><div>Button</div>`, // You can use HTML/SVG inside labels
    category: 'Basics',
    content: BLOCK_COMPONENTS.text_input,
  },
  {
    id: 'toolbar',
    label: `<i class="material-icons">
    menu_open
    </i><div>Toolbar</div>`,
    category: 'Layouts',
    content: BLOCK_COMPONENTS.navbar
  },
  {
    id: 'image',
    label: `<i class="material-icons">
    image
    </i><div>Image</div>`,
    // Select the component once it's dropped
    select: true,
    category: 'Basics',
    // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
    content: { type: 'image' },
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
    activate: true,
  },
  {
    id: 'grid',
    label: `<i class="material-icons">
    view_quilt
    </i><div>Grid</div>`,
    category: 'Layouts',
    content: BLOCK_COMPONENTS.grid
  },
  {
    id: 'grid-cell',
    label: `<i class="material-icons">
    view_array
    </i><div>Grid Cell</div>`,
    category: 'Layouts',
    content: BLOCK_COMPONENTS.grid_cell
  },
  {
    id: 'card',
    label: `<i class="material-icons">
    chrome_reader_mode
    </i><div>Card</div>`,
    category: 'Basics',
    content: BLOCK_COMPONENTS.card
  },
  {
    id: 'chips',
    label: `<i class="material-icons">
    label
    </i><div>Chips</div>`,
    category: 'Basics',
    content: BLOCK_COMPONENTS.chips
  },
  {
    id: 'slider',
    label: `<i class="material-icons">
    linear_scale
    </i><div>Slider</div>`,
    category: 'Inputs',
    content: BLOCK_COMPONENTS.slider
  },
  {
    id: 'text-input',
    label: `<i class="material-icons">
    text_fields
    </i><div>Text Input</div>`,
    category: 'Inputs',
    content: BLOCK_COMPONENTS.text_input
  },
  {
    id: 'checkbox',
    label: `<i class="material-icons">
    check_box
    </i><div>Checkbox</div>`,
    category: 'Inputs',
    content: BLOCK_COMPONENTS.checkbox
  },
  {
    id: 'radiobutton',
    label: `<i class="material-icons">
    radio_button_checked
    </i><div>Radio Button</div>`,
    category: 'Inputs',
    content: BLOCK_COMPONENTS.radiobutton
  },
  {
    id: 'switch',
    label: `<i class="material-icons">
    toggle_on
    </i><div>Switch</div>`,
    category: 'Inputs',
    content: BLOCK_COMPONENTS.switch
  },
  {
    id: 'spinner',
    label: `<i class="material-icons">
    cached
    </i><div>Spinner</div>`,
    category: 'Extras',
    content: BLOCK_COMPONENTS.spinner
  },
  {
    id: 'footer',
    label: `<i class="material-icons">
    call_to_action
    </i><div>Footer</div>`,
    category: 'Layouts',
    content: BLOCK_COMPONENTS.footer
  },
  {
    id: 'custom',
    label: `<i class="material-icons">
    polymer
    </i><div>Custom</div>`,
    category: 'Extras',
    content: BLOCK_COMPONENTS.custom
  }
];
