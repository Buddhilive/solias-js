import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from '../projects/components/src/lib/navbar/navbar.component';

export default {
    title: 'Components/Navbar',
    component: NavbarComponent,
    argTypes: {}
} as Meta;

const navTitle = `<h1 class="title">Solias</h1>`;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    props: args,
    template: `<solias-navbar>
    ${navTitle}
    </solias-navbar>`
});

export const Standard = Template.bind({});

Standard.args = {};