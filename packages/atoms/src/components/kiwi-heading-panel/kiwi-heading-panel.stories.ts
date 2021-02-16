import { html, TemplateResult } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/HeadingPanel',
  parameters: { docs: { description: { component: notes } } },
};

export const Basic = ({
  secondary,
  top,
  left,
  right,
}: Record<string, boolean>): TemplateResult => {
  console.log({
    secondary,
    top,
    left,
    right,
  });

  return html`
    <kiwi-heading-panel
      .withSecondary="${secondary}"
      .withTop="${top}"
      .withLeft="${left}"
      .withRight="${right}"
    >
      <span slot="kiwi-heading-top"> Breadcrumb » Goes » Here </span>

      <span
        slot="kiwi-heading-left"
        class="glyphicon glyphicon-flash icon-sm"
      ></span>

      <span slot="kiwi-heading-primary">Primary Heading</span>

      <span slot="kiwi-heading-secondary" class="text-default">
        Secondary Heading
      </span>

      <nav slot="kiwi-heading-right">
        <ul class="nav nav-pills">
          <li class="active">
            <a>Pill1</a>
          </li>
          <li>
            <a>Pill2</a>
          </li>
        </ul>
      </nav>
    </kiwi-heading-panel>
  `;
};
Basic.args = {
  secondary: true,
  top: true,
  left: true,
  right: true,
};
