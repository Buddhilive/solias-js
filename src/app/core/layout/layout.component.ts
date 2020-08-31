import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import grapesjs from 'grapesjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BLOCK_COMPONENTS_ARRAY } from './blocks.components';

@Component({
  selector: 'solias-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  editor: any;
  genTemplate: any;
  baseTemplate = `<!DOCTYPE html><head><link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;display=swap"><script src="https://code.getmdl.io/1.3.0/material.min.js" defer=""></script>
  <style>
  /* body {
    margin: 0;
  }
  header {
    top: 0;
  }
  main {
    margin-top: 64px;
    padding: 24px;
  } */
  </style>
  </head><body>`;
  endHtml = `</body></html>`;
  fileUrl: any;

  constructor(
    public layoutService: LayoutService,
    public _authService: AuthService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      allowScripts: 1,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      },
      layerManager: {
        appendTo: '.layers-container'
      },
      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 0, // Right handler
              bc: 0, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: 'flex-basis',
            }
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-blocks',
                active: true,
                label: `<i class="material-icons">
                category
                </i>`,
                command: 'show-blocks',
                togglable: false,
              },
              {
                id: 'show-layers',
                label: `<i class="material-icons">
                layers
                </i>`,
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false,
              }, {
                id: 'show-style',
                label: `<i class="material-icons">
                brush
                </i>`,
                command: 'show-styles',
                togglable: false,
              },
              {
                id: 'show-traits',
                label: `<i class="material-icons">
                format_paint
                </i>`,
                command: 'show-traits',
                togglable: false,
              }
            ]
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [{
              id: 'device-desktop',
              label: `<i class="material-icons">
              laptop_mac
              </i>`,
              command: 'set-device-desktop',
              active: true,
              togglable: false,
            }, {
              id: 'device-mobile',
              label: `<i class="material-icons">
              phone_iphone
              </i>`,
              command: 'set-device-mobile',
              togglable: false,
            }],
          }
        ]
      },
      traitManager: {
        appendTo: '.traits-container'
      },
      deviceManager: {
        devices: [{
          name: 'Desktop',
          width: '', // default size
        }, {
          name: 'Mobile',
          width: '320px', // this value will be used on canvas width
          widthMedia: '480px', // this value will be used in CSS @media
        }]
      },
      canvas: {
        styles: [
          'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
        ]
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: BLOCK_COMPONENTS_ARRAY
      },
      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: 'integer',
              name: 'The width', // Label for the property
              property: 'width', // CSS property (if buildProps contains it will be extended)
              units: ['px', '%'], // Units, available only for 'integer' types
              defaults: 'auto', // Default value
              min: 0, // Min value, available only for 'integer' types
            }
          ]
        }, {
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
            }
          ]
        }]
      },
    });

    this.editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    this.editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: false, // active by default
          className: 'btn-toggle-borders',
          label: `<div class="tooltip"><i class="material-icons">
          border_style
          </i><span class="tooltiptext">Borders</span></div>`,
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: `<i class="material-icons">
          code
          </i>`,
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        },
        /* {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open();
          },
        }, */
        {
          id: 'preview',
          className: 'btn-preview',
          label: `<i class="material-icons">
          visibility
          </i>`,
          command: 'preview-window', // Built-in command
        },
        {
          id: 'clear',
          className: 'btn-clear-canvas',
          label: `<i class="material-icons">
          delete
          </i>`,
          command: 'clear-html', // Built-in command
        },
        {
          id: 'download',
          className: 'btn-downloader',
          label: `<i class="material-icons">
          cloud_download
          </i>`,
          command: 'download-html', // Built-in command
        }
      ],
    });

    // Define commands

    this.editor.Commands.add('show-blocks', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl(row) { return row.querySelector('#blocks') },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'block';
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });

    this.editor.Commands.add('show-layers', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl(row) { return row.querySelector('.layers-container') },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'block';
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });
    this.editor.Commands.add('show-styles', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getStyleEl(row) { return row.querySelector('.styles-container') },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'block';
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    this.editor.Commands.add('show-traits', {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = 'block';
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    this.editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    this.editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });

    this.editor.Commands.add('clear-html', {
      run: editor => editor.DomComponents.clear()
    });

    this.editor.Commands.add('preview-window', {
      run: editor => {
        /* const canvasObj = editor.Canvas.getDocument();
        const newHTML = new XMLSerializer().serializeToString(canvasObj); */
        const previewWindow = window.open('', 'Preview');
        previewWindow.document.write(this.baseTemplate + this.editor.getHtml() + this.endHtml);
      }
    });

    this.editor.Commands.add('download-html', {
      run: editor => {
        const data = this.baseTemplate + this.editor.getHtml() + this.endHtml;
        const blob = new Blob([data], { type: 'text/html' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        console.log(this.fileUrl.changingThisBreaksApplicationSecurity);
        const extractUrl = this.fileUrl.changingThisBreaksApplicationSecurity;
        const fileName = 'solias-by-buddhilive' + Date.now();
        this.layoutService.fileUrl = extractUrl;
        this.layoutService.getUrl();
        const downloadWindow = window.open('');
        downloadWindow.document.write('<a href="' + extractUrl + '" download="' + fileName + '.html">DownloadFile</a>');
      }
    });

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://code.getmdl.io/1.3.0/material.min.js';
    scriptEl.setAttribute('defer', '');
    this.editor.Canvas.getDocument().head.appendChild(scriptEl);

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
    /* body {
      margin: 0;
    }
    header {
      top 0;
    }
    main {
      margin-top: 64px;
      padding: 24px;
    } */
    .page-content {
      height: calc(100vh - 64px)
    }
    .custom-component {
      height: 24px;
    }
    `;
    this.editor.Canvas.getDocument().head.appendChild(styleEl);

    this.editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text', // If you don't specify the type, the `text` is the default one
              name: 'title', // Required and available for all traits
              label: 'Title', // The label you will see near the input
              // label: false, // If you set label to `false`, the label column will be removed
              placeholder: 'Insert text', // Placeholder to show inside the input
            },
            {
              type: 'text', // If you don't specify the type, the `text` is the default one
              name: 'id', // Required and available for all traits
              label: 'id', // The label you will see near the input
              // label: false, // If you set label to `false`, the label column will be removed
              placeholder: 'Unique Id', // Placeholder to show inside the input
            }
          ]
        },
        init() {
          this.on('change:attributes:title', this.handleTypeChange);
        },

        handleTypeChange() {
          this.attributes.content = this.attributes.attributes.title;
          console.log(this.attributes.content);
        }
      }
    });

    this.editor.DomComponents.addType('input', {
      isComponent: el => el.tagName == 'INPUT',
      model: {
        defaults: {
          traits: [
            // Strings are automatically converted to text types
            'name', // Same as: { type: 'text', name: 'name' }
            'placeholder',
            'value',
            {
              type: 'select', // Type of the trait
              label: 'Type', // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: 'Text' },
                { id: 'button', name: 'Email' },
                { id: 'password', name: 'Password' },
                { id: 'number', name: 'Number' },
              ]
            }, {
              type: 'checkbox',
              name: 'required',
            }],
          // As by default, traits are binded to attributes, so to define
          // their initial value we can use attributes
          attributes: { type: 'text', required: true },
        },
      },
    });

    this.editor.StyleManager.addSelector('div', {
      isComponent: el => el.tagName == 'DIV',
      sectors: [{
        name: 'Dimension',
        buildProps: ['width', 'min-height']
      },{
        name: 'Buddhi',
        buildProps: ['background-color', 'box-shadow']
      }]
    });

    this.editor.on('component:selected', (argument) => {
      const component = this.editor.getSelected();
      console.log(component.getEl());
    });

    this.editor.on('component:update', (editor) => {
      //console.log(editor);
    });


    //blockManager
    //const blockManager = this.editor.BlockManager;

    // 'my-first-block' is the ID of the block
  }

  showHTML() {
    /* const Html = this.editor.getHtml();
    const Css = this.editor.getCss();
    console.log(Html, Css);
    this.genTemplate = Html; */
    const data = this.baseTemplate + this.editor.getHtml() + this.endHtml;
    const blob = new Blob([data], { type: 'text/html' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    /* const downloadWindow = window.open("");
    downloadWindow.document.write('<a href="' + url + '" download="file.html">DownloadFile</a>') */
  }

}
