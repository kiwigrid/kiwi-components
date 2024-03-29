/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Size } from "./components/kiwi-empty/kiwi-empty";
import { i18n, TOptions } from "i18next";
import { LabelKind } from "./components/kiwi-label/kiwi-label";
import { Size as Size1 } from "./components/kiwi-modal/kiwi-modal";
import { Placement } from "@popperjs/core/lib";
import { Modifier } from "@popperjs/core/lib/types";
import { SortDirection } from "./components/kiwi-sortable-label/kiwi-sortable-label";
export namespace Components {
    interface KiwiAlert {
        /**
          * The type of the alert.
         */
        "type": 'info' | 'warn' | 'error' | 'success';
    }
    interface KiwiBreadcrumb {
    }
    interface KiwiBreadcrumbItem {
    }
    interface KiwiCheckboxDropdownMenu {
        /**
          * Type of the toggle button.
         */
        "toggleButtonType": 'default' | 'primary' | 'danger' | 'warning' | 'info';
    }
    interface KiwiCheckboxMenu {
    }
    interface KiwiCheckboxMenuItem {
    }
    interface KiwiDropdown {
        /**
          * Setting this to true will cause the dropdown to close if a click is registered inside the dropdown-menu
         */
        "closeOnContentClick": boolean;
        /**
          * Css class to be applied to container.
         */
        "containerClass": string;
        /**
          * Type of the toggle button.
         */
        "toggleButtonType": 'default' | 'primary' | 'danger' | 'warning' | 'info';
    }
    interface KiwiEmpty {
        /**
          * Additional css class to apply to the container.
         */
        "containerClass": string;
        /**
          * The name of the glyphicon icon to use. So if you want to render a `glyphicon-ok` pass `ok` as the name.
         */
        "glyphicon": string;
        /**
          * Provide a custom class to use instead of glyphicons.
         */
        "icon"?: string;
        /**
          * The size of the icon.
         */
        "size": Size;
        /**
          * Show optional content below the icon.
         */
        "withContent": boolean;
    }
    interface KiwiHeadingPanel {
        /**
          * Show slot `kiwi-heading-left`.
         */
        "withLeft": boolean;
        /**
          * Show slot `kiwi-heading-right`.
         */
        "withRight": boolean;
        /**
          * Show slot `kiwi-heading-secondary`.
         */
        "withSecondary": boolean;
        /**
          * Show slot `kiwi-heading-top`.
         */
        "withTop": boolean;
    }
    interface KiwiI18next {
        /**
          * The key to translate
         */
        "msgKey": string;
        /**
          * Options passed to i18next's t function
         */
        "options"?: TOptions | string;
    }
    interface KiwiI18nextProvider {
        /**
          * Uninitialized i18next instance to use.
         */
        "i18next": i18n;
        /**
          * The language to use for i18n. en as default.
         */
        "lng": string;
        /**
          * Base path used to configure i18next backend.
          * @see {BackendOptions#loadPath}
         */
        "loadBasePath": string;
        /**
          * Namespaces to be loaded by i18next
         */
        "ns": string[];
    }
    interface KiwiInput {
        /**
          * The _name_ attribute of the underlying input.
         */
        "name"?: string;
        /**
          * The _placeholder_ attribute of the underlying input. Default _empty_.
         */
        "placeholder": string;
        /**
          * The _value_ attribute of the underlying input. Default _empty_.
         */
        "value": string;
    }
    interface KiwiLabel {
        /**
          * Additional classes to apply to the label.
         */
        "classes": string[];
        /**
          * Kind of label
         */
        "kind": LabelKind;
    }
    interface KiwiLabeledCheckbox {
        /**
          * The value of the checkbox.
         */
        "checked": boolean;
        /**
          * The checkbox label.
         */
        "label"?: string;
        /**
          * The name attr of the checkbox.
         */
        "name": string;
    }
    interface KiwiLoading {
        /**
          * Indicates the loading state.
         */
        "loading": boolean;
        /**
          * The label of the loading spinner.
         */
        "text": string;
    }
    interface KiwiModal {
        /**
          * Set to true if the modal should be closed on Escape press
         */
        "escape": boolean;
        /**
          * Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail
         */
        "open": boolean;
        /**
          * Set the size of the modal
         */
        "size": Size;
        /**
          * Set this to true if you want to show the header
         */
        "withHeader": boolean;
    }
    interface KiwiModalFooter {
        /**
          * The labels to be used for the default footer buttons, passed as a tuple of strings with the first entry being the confirm label, and the second being the cancel label.
         */
        "defaultLabels": [confirm: string, cancel: string];
        /**
          * Whether to render the default footer buttons or a slot.  This is a workaround since slot fallback content is not rendered correctly with `shadow: false`
         */
        "useDefault": boolean;
    }
    interface KiwiPager {
        /**
          * Debounce time in milliseconds.
         */
        "debounce": number;
        /**
          * Translated "of" label (e.g. 3 of 10)
         */
        "ofLabel": string;
        /**
          * Zero based page number
         */
        "page": number;
        /**
          * Total pages
         */
        "total": number;
    }
    interface KiwiPopover {
        /**
          * The maximum width of the popover.
         */
        "maxWidth": string;
        /**
          * The minimum width of the popover.
         */
        "minWidth": string;
        /**
          * Popper.js modifiers options. See https://popper.js.org/popper-documentation.html#modifiers
         */
        "modifiers": Modifier<unknown, unknown>[];
        /**
          * Placement of the tooltip.
         */
        "placement": Placement;
        /**
          * Show or hide the popover title.
         */
        "showTitle": boolean;
    }
    interface KiwiRibbon {
        /**
          * The bootstrap background color scheme to use, e.g. primary, default, ...
         */
        "backgroundColor"?: | 'gray'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
        /**
          * The text to display in the ribbon
         */
        "text"?: string;
        /**
          * The bootstrap text color scheme to use, e.g. primary, default, ...
         */
        "textColor"?: | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'black'
    | 'paper'
    | 'gray'
    | 'charcoal';
    }
    interface KiwiSearchbar {
        /**
          * The debounce time for the `triggerSearch` event in milliseconds. Default: `400`
         */
        "debounce": number;
        /**
          * The placeholder to use for the search input.
         */
        "placeholder": string;
        /**
          * The input value
         */
        "value": string;
    }
    interface KiwiSidebar {
        /**
          * The position of the sidebar
         */
        "position": 'left' | 'right';
        /**
          * Visibility of the sidebar
         */
        "visible": boolean;
    }
    interface KiwiSkeleton {
        /**
          * Number of skeleton rows.
         */
        "rows": number;
        /**
          * The kind of element this skeleton should represent.
         */
        "type": 'paragraph' | 'table';
    }
    interface KiwiSortableLabel {
        /**
          * The label to be displayed.
         */
        "label"?: string;
        /**
          * The initial sort direction.
         */
        "sortDirection": SortDirection;
        /**
          * The key to be sent by sort event.
         */
        "sortKey": string;
    }
    interface KiwiToasts {
    }
}
declare global {
    interface HTMLKiwiAlertElement extends Components.KiwiAlert, HTMLStencilElement {
    }
    var HTMLKiwiAlertElement: {
        prototype: HTMLKiwiAlertElement;
        new (): HTMLKiwiAlertElement;
    };
    interface HTMLKiwiBreadcrumbElement extends Components.KiwiBreadcrumb, HTMLStencilElement {
    }
    var HTMLKiwiBreadcrumbElement: {
        prototype: HTMLKiwiBreadcrumbElement;
        new (): HTMLKiwiBreadcrumbElement;
    };
    interface HTMLKiwiBreadcrumbItemElement extends Components.KiwiBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLKiwiBreadcrumbItemElement: {
        prototype: HTMLKiwiBreadcrumbItemElement;
        new (): HTMLKiwiBreadcrumbItemElement;
    };
    interface HTMLKiwiCheckboxDropdownMenuElement extends Components.KiwiCheckboxDropdownMenu, HTMLStencilElement {
    }
    var HTMLKiwiCheckboxDropdownMenuElement: {
        prototype: HTMLKiwiCheckboxDropdownMenuElement;
        new (): HTMLKiwiCheckboxDropdownMenuElement;
    };
    interface HTMLKiwiCheckboxMenuElement extends Components.KiwiCheckboxMenu, HTMLStencilElement {
    }
    var HTMLKiwiCheckboxMenuElement: {
        prototype: HTMLKiwiCheckboxMenuElement;
        new (): HTMLKiwiCheckboxMenuElement;
    };
    interface HTMLKiwiCheckboxMenuItemElement extends Components.KiwiCheckboxMenuItem, HTMLStencilElement {
    }
    var HTMLKiwiCheckboxMenuItemElement: {
        prototype: HTMLKiwiCheckboxMenuItemElement;
        new (): HTMLKiwiCheckboxMenuItemElement;
    };
    interface HTMLKiwiDropdownElement extends Components.KiwiDropdown, HTMLStencilElement {
    }
    var HTMLKiwiDropdownElement: {
        prototype: HTMLKiwiDropdownElement;
        new (): HTMLKiwiDropdownElement;
    };
    interface HTMLKiwiEmptyElement extends Components.KiwiEmpty, HTMLStencilElement {
    }
    var HTMLKiwiEmptyElement: {
        prototype: HTMLKiwiEmptyElement;
        new (): HTMLKiwiEmptyElement;
    };
    interface HTMLKiwiHeadingPanelElement extends Components.KiwiHeadingPanel, HTMLStencilElement {
    }
    var HTMLKiwiHeadingPanelElement: {
        prototype: HTMLKiwiHeadingPanelElement;
        new (): HTMLKiwiHeadingPanelElement;
    };
    interface HTMLKiwiI18nextElement extends Components.KiwiI18next, HTMLStencilElement {
    }
    var HTMLKiwiI18nextElement: {
        prototype: HTMLKiwiI18nextElement;
        new (): HTMLKiwiI18nextElement;
    };
    interface HTMLKiwiI18nextProviderElement extends Components.KiwiI18nextProvider, HTMLStencilElement {
    }
    var HTMLKiwiI18nextProviderElement: {
        prototype: HTMLKiwiI18nextProviderElement;
        new (): HTMLKiwiI18nextProviderElement;
    };
    interface HTMLKiwiInputElement extends Components.KiwiInput, HTMLStencilElement {
    }
    var HTMLKiwiInputElement: {
        prototype: HTMLKiwiInputElement;
        new (): HTMLKiwiInputElement;
    };
    interface HTMLKiwiLabelElement extends Components.KiwiLabel, HTMLStencilElement {
    }
    var HTMLKiwiLabelElement: {
        prototype: HTMLKiwiLabelElement;
        new (): HTMLKiwiLabelElement;
    };
    interface HTMLKiwiLabeledCheckboxElement extends Components.KiwiLabeledCheckbox, HTMLStencilElement {
    }
    var HTMLKiwiLabeledCheckboxElement: {
        prototype: HTMLKiwiLabeledCheckboxElement;
        new (): HTMLKiwiLabeledCheckboxElement;
    };
    interface HTMLKiwiLoadingElement extends Components.KiwiLoading, HTMLStencilElement {
    }
    var HTMLKiwiLoadingElement: {
        prototype: HTMLKiwiLoadingElement;
        new (): HTMLKiwiLoadingElement;
    };
    interface HTMLKiwiModalElement extends Components.KiwiModal, HTMLStencilElement {
    }
    var HTMLKiwiModalElement: {
        prototype: HTMLKiwiModalElement;
        new (): HTMLKiwiModalElement;
    };
    interface HTMLKiwiModalFooterElement extends Components.KiwiModalFooter, HTMLStencilElement {
    }
    var HTMLKiwiModalFooterElement: {
        prototype: HTMLKiwiModalFooterElement;
        new (): HTMLKiwiModalFooterElement;
    };
    interface HTMLKiwiPagerElement extends Components.KiwiPager, HTMLStencilElement {
    }
    var HTMLKiwiPagerElement: {
        prototype: HTMLKiwiPagerElement;
        new (): HTMLKiwiPagerElement;
    };
    interface HTMLKiwiPopoverElement extends Components.KiwiPopover, HTMLStencilElement {
    }
    var HTMLKiwiPopoverElement: {
        prototype: HTMLKiwiPopoverElement;
        new (): HTMLKiwiPopoverElement;
    };
    interface HTMLKiwiRibbonElement extends Components.KiwiRibbon, HTMLStencilElement {
    }
    var HTMLKiwiRibbonElement: {
        prototype: HTMLKiwiRibbonElement;
        new (): HTMLKiwiRibbonElement;
    };
    interface HTMLKiwiSearchbarElement extends Components.KiwiSearchbar, HTMLStencilElement {
    }
    var HTMLKiwiSearchbarElement: {
        prototype: HTMLKiwiSearchbarElement;
        new (): HTMLKiwiSearchbarElement;
    };
    interface HTMLKiwiSidebarElement extends Components.KiwiSidebar, HTMLStencilElement {
    }
    var HTMLKiwiSidebarElement: {
        prototype: HTMLKiwiSidebarElement;
        new (): HTMLKiwiSidebarElement;
    };
    interface HTMLKiwiSkeletonElement extends Components.KiwiSkeleton, HTMLStencilElement {
    }
    var HTMLKiwiSkeletonElement: {
        prototype: HTMLKiwiSkeletonElement;
        new (): HTMLKiwiSkeletonElement;
    };
    interface HTMLKiwiSortableLabelElement extends Components.KiwiSortableLabel, HTMLStencilElement {
    }
    var HTMLKiwiSortableLabelElement: {
        prototype: HTMLKiwiSortableLabelElement;
        new (): HTMLKiwiSortableLabelElement;
    };
    interface HTMLKiwiToastsElement extends Components.KiwiToasts, HTMLStencilElement {
    }
    var HTMLKiwiToastsElement: {
        prototype: HTMLKiwiToastsElement;
        new (): HTMLKiwiToastsElement;
    };
    interface HTMLElementTagNameMap {
        "kiwi-alert": HTMLKiwiAlertElement;
        "kiwi-breadcrumb": HTMLKiwiBreadcrumbElement;
        "kiwi-breadcrumb-item": HTMLKiwiBreadcrumbItemElement;
        "kiwi-checkbox-dropdown-menu": HTMLKiwiCheckboxDropdownMenuElement;
        "kiwi-checkbox-menu": HTMLKiwiCheckboxMenuElement;
        "kiwi-checkbox-menu-item": HTMLKiwiCheckboxMenuItemElement;
        "kiwi-dropdown": HTMLKiwiDropdownElement;
        "kiwi-empty": HTMLKiwiEmptyElement;
        "kiwi-heading-panel": HTMLKiwiHeadingPanelElement;
        "kiwi-i18next": HTMLKiwiI18nextElement;
        "kiwi-i18next-provider": HTMLKiwiI18nextProviderElement;
        "kiwi-input": HTMLKiwiInputElement;
        "kiwi-label": HTMLKiwiLabelElement;
        "kiwi-labeled-checkbox": HTMLKiwiLabeledCheckboxElement;
        "kiwi-loading": HTMLKiwiLoadingElement;
        "kiwi-modal": HTMLKiwiModalElement;
        "kiwi-modal-footer": HTMLKiwiModalFooterElement;
        "kiwi-pager": HTMLKiwiPagerElement;
        "kiwi-popover": HTMLKiwiPopoverElement;
        "kiwi-ribbon": HTMLKiwiRibbonElement;
        "kiwi-searchbar": HTMLKiwiSearchbarElement;
        "kiwi-sidebar": HTMLKiwiSidebarElement;
        "kiwi-skeleton": HTMLKiwiSkeletonElement;
        "kiwi-sortable-label": HTMLKiwiSortableLabelElement;
        "kiwi-toasts": HTMLKiwiToastsElement;
    }
}
declare namespace LocalJSX {
    interface KiwiAlert {
        /**
          * The type of the alert.
         */
        "type"?: 'info' | 'warn' | 'error' | 'success';
    }
    interface KiwiBreadcrumb {
    }
    interface KiwiBreadcrumbItem {
    }
    interface KiwiCheckboxDropdownMenu {
        /**
          * Event signaling that this dropdown was closed.
         */
        "onCloseDropdown"?: (event: CustomEvent<void>) => void;
        /**
          * Type of the toggle button.
         */
        "toggleButtonType"?: 'default' | 'primary' | 'danger' | 'warning' | 'info';
    }
    interface KiwiCheckboxMenu {
    }
    interface KiwiCheckboxMenuItem {
    }
    interface KiwiDropdown {
        /**
          * Setting this to true will cause the dropdown to close if a click is registered inside the dropdown-menu
         */
        "closeOnContentClick"?: boolean;
        /**
          * Css class to be applied to container.
         */
        "containerClass"?: string;
        /**
          * Event signaling this dropdown is being closed.
         */
        "onCloseDropdown"?: (event: CustomEvent<void>) => void;
        /**
          * Type of the toggle button.
         */
        "toggleButtonType"?: 'default' | 'primary' | 'danger' | 'warning' | 'info';
    }
    interface KiwiEmpty {
        /**
          * Additional css class to apply to the container.
         */
        "containerClass"?: string;
        /**
          * The name of the glyphicon icon to use. So if you want to render a `glyphicon-ok` pass `ok` as the name.
         */
        "glyphicon"?: string;
        /**
          * Provide a custom class to use instead of glyphicons.
         */
        "icon"?: string;
        /**
          * The size of the icon.
         */
        "size"?: Size;
        /**
          * Show optional content below the icon.
         */
        "withContent"?: boolean;
    }
    interface KiwiHeadingPanel {
        /**
          * Show slot `kiwi-heading-left`.
         */
        "withLeft"?: boolean;
        /**
          * Show slot `kiwi-heading-right`.
         */
        "withRight"?: boolean;
        /**
          * Show slot `kiwi-heading-secondary`.
         */
        "withSecondary"?: boolean;
        /**
          * Show slot `kiwi-heading-top`.
         */
        "withTop"?: boolean;
    }
    interface KiwiI18next {
        /**
          * The key to translate
         */
        "msgKey": string;
        /**
          * Options passed to i18next's t function
         */
        "options"?: TOptions | string;
    }
    interface KiwiI18nextProvider {
        /**
          * Uninitialized i18next instance to use.
         */
        "i18next": i18n;
        /**
          * The language to use for i18n. en as default.
         */
        "lng"?: string;
        /**
          * Base path used to configure i18next backend.
          * @see {BackendOptions#loadPath}
         */
        "loadBasePath": string;
        /**
          * Namespaces to be loaded by i18next
         */
        "ns"?: string[];
    }
    interface KiwiInput {
        /**
          * The _name_ attribute of the underlying input.
         */
        "name"?: string;
        /**
          * The _placeholder_ attribute of the underlying input. Default _empty_.
         */
        "placeholder"?: string;
        /**
          * The _value_ attribute of the underlying input. Default _empty_.
         */
        "value"?: string;
    }
    interface KiwiLabel {
        /**
          * Additional classes to apply to the label.
         */
        "classes"?: string[];
        /**
          * Kind of label
         */
        "kind": LabelKind;
    }
    interface KiwiLabeledCheckbox {
        /**
          * The value of the checkbox.
         */
        "checked"?: boolean;
        /**
          * The checkbox label.
         */
        "label"?: string;
        /**
          * The name attr of the checkbox.
         */
        "name": string;
    }
    interface KiwiLoading {
        /**
          * Indicates the loading state.
         */
        "loading"?: boolean;
        /**
          * The label of the loading spinner.
         */
        "text": string;
    }
    interface KiwiModal {
        /**
          * Set to true if the modal should be closed on Escape press
         */
        "escape"?: boolean;
        /**
          * This event is emitted after the modal was closed
         */
        "onClose"?: (event: CustomEvent<any>) => void;
        /**
          * Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail
         */
        "open"?: boolean;
        /**
          * Set the size of the modal
         */
        "size"?: Size;
        /**
          * Set this to true if you want to show the header
         */
        "withHeader"?: boolean;
    }
    interface KiwiModalFooter {
        /**
          * The labels to be used for the default footer buttons, passed as a tuple of strings with the first entry being the confirm label, and the second being the cancel label.
         */
        "defaultLabels"?: [confirm: string, cancel: string];
        /**
          * The event emitted when the user clicks the default cancel button.
         */
        "onCancel"?: (event: CustomEvent<any>) => void;
        /**
          * The event emitted when the user clicks the default confirm button.
         */
        "onConfirm"?: (event: CustomEvent<any>) => void;
        /**
          * Whether to render the default footer buttons or a slot.  This is a workaround since slot fallback content is not rendered correctly with `shadow: false`
         */
        "useDefault"?: boolean;
    }
    interface KiwiPager {
        /**
          * Debounce time in milliseconds.
         */
        "debounce"?: number;
        /**
          * Translated "of" label (e.g. 3 of 10)
         */
        "ofLabel": string;
        /**
          * Event signaling a change of the page number.
         */
        "onPageChanged"?: (event: CustomEvent<{ page: number }>) => void;
        /**
          * Zero based page number
         */
        "page": number;
        /**
          * Total pages
         */
        "total": number;
    }
    interface KiwiPopover {
        /**
          * The maximum width of the popover.
         */
        "maxWidth"?: string;
        /**
          * The minimum width of the popover.
         */
        "minWidth"?: string;
        /**
          * Popper.js modifiers options. See https://popper.js.org/popper-documentation.html#modifiers
         */
        "modifiers"?: Modifier<unknown, unknown>[];
        /**
          * Placement of the tooltip.
         */
        "placement"?: Placement;
        /**
          * Show or hide the popover title.
         */
        "showTitle"?: boolean;
    }
    interface KiwiRibbon {
        /**
          * The bootstrap background color scheme to use, e.g. primary, default, ...
         */
        "backgroundColor"?: | 'gray'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
        /**
          * The text to display in the ribbon
         */
        "text"?: string;
        /**
          * The bootstrap text color scheme to use, e.g. primary, default, ...
         */
        "textColor"?: | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'black'
    | 'paper'
    | 'gray'
    | 'charcoal';
    }
    interface KiwiSearchbar {
        /**
          * The debounce time for the `triggerSearch` event in milliseconds. Default: `400`
         */
        "debounce"?: number;
        /**
          * Event containing the search query. Fired after `debounce` time, either on type, or on click (immediately).
         */
        "onTriggerSearch"?: (event: CustomEvent<string>) => void;
        /**
          * The placeholder to use for the search input.
         */
        "placeholder"?: string;
        /**
          * The input value
         */
        "value"?: string;
    }
    interface KiwiSidebar {
        /**
          * Event signaling a backdrop click.
         */
        "onRequestClose"?: (event: CustomEvent<void>) => void;
        /**
          * The position of the sidebar
         */
        "position": 'left' | 'right';
        /**
          * Visibility of the sidebar
         */
        "visible": boolean;
    }
    interface KiwiSkeleton {
        /**
          * Number of skeleton rows.
         */
        "rows"?: number;
        /**
          * The kind of element this skeleton should represent.
         */
        "type"?: 'paragraph' | 'table';
    }
    interface KiwiSortableLabel {
        /**
          * The label to be displayed.
         */
        "label"?: string;
        /**
          * Sort event sent when clicked on a label.
         */
        "onSort"?: (event: CustomEvent<string>) => void;
        /**
          * The initial sort direction.
         */
        "sortDirection"?: SortDirection;
        /**
          * The key to be sent by sort event.
         */
        "sortKey": string;
    }
    interface KiwiToasts {
    }
    interface IntrinsicElements {
        "kiwi-alert": KiwiAlert;
        "kiwi-breadcrumb": KiwiBreadcrumb;
        "kiwi-breadcrumb-item": KiwiBreadcrumbItem;
        "kiwi-checkbox-dropdown-menu": KiwiCheckboxDropdownMenu;
        "kiwi-checkbox-menu": KiwiCheckboxMenu;
        "kiwi-checkbox-menu-item": KiwiCheckboxMenuItem;
        "kiwi-dropdown": KiwiDropdown;
        "kiwi-empty": KiwiEmpty;
        "kiwi-heading-panel": KiwiHeadingPanel;
        "kiwi-i18next": KiwiI18next;
        "kiwi-i18next-provider": KiwiI18nextProvider;
        "kiwi-input": KiwiInput;
        "kiwi-label": KiwiLabel;
        "kiwi-labeled-checkbox": KiwiLabeledCheckbox;
        "kiwi-loading": KiwiLoading;
        "kiwi-modal": KiwiModal;
        "kiwi-modal-footer": KiwiModalFooter;
        "kiwi-pager": KiwiPager;
        "kiwi-popover": KiwiPopover;
        "kiwi-ribbon": KiwiRibbon;
        "kiwi-searchbar": KiwiSearchbar;
        "kiwi-sidebar": KiwiSidebar;
        "kiwi-skeleton": KiwiSkeleton;
        "kiwi-sortable-label": KiwiSortableLabel;
        "kiwi-toasts": KiwiToasts;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kiwi-alert": LocalJSX.KiwiAlert & JSXBase.HTMLAttributes<HTMLKiwiAlertElement>;
            "kiwi-breadcrumb": LocalJSX.KiwiBreadcrumb & JSXBase.HTMLAttributes<HTMLKiwiBreadcrumbElement>;
            "kiwi-breadcrumb-item": LocalJSX.KiwiBreadcrumbItem & JSXBase.HTMLAttributes<HTMLKiwiBreadcrumbItemElement>;
            "kiwi-checkbox-dropdown-menu": LocalJSX.KiwiCheckboxDropdownMenu & JSXBase.HTMLAttributes<HTMLKiwiCheckboxDropdownMenuElement>;
            "kiwi-checkbox-menu": LocalJSX.KiwiCheckboxMenu & JSXBase.HTMLAttributes<HTMLKiwiCheckboxMenuElement>;
            "kiwi-checkbox-menu-item": LocalJSX.KiwiCheckboxMenuItem & JSXBase.HTMLAttributes<HTMLKiwiCheckboxMenuItemElement>;
            "kiwi-dropdown": LocalJSX.KiwiDropdown & JSXBase.HTMLAttributes<HTMLKiwiDropdownElement>;
            "kiwi-empty": LocalJSX.KiwiEmpty & JSXBase.HTMLAttributes<HTMLKiwiEmptyElement>;
            "kiwi-heading-panel": LocalJSX.KiwiHeadingPanel & JSXBase.HTMLAttributes<HTMLKiwiHeadingPanelElement>;
            "kiwi-i18next": LocalJSX.KiwiI18next & JSXBase.HTMLAttributes<HTMLKiwiI18nextElement>;
            "kiwi-i18next-provider": LocalJSX.KiwiI18nextProvider & JSXBase.HTMLAttributes<HTMLKiwiI18nextProviderElement>;
            "kiwi-input": LocalJSX.KiwiInput & JSXBase.HTMLAttributes<HTMLKiwiInputElement>;
            "kiwi-label": LocalJSX.KiwiLabel & JSXBase.HTMLAttributes<HTMLKiwiLabelElement>;
            "kiwi-labeled-checkbox": LocalJSX.KiwiLabeledCheckbox & JSXBase.HTMLAttributes<HTMLKiwiLabeledCheckboxElement>;
            "kiwi-loading": LocalJSX.KiwiLoading & JSXBase.HTMLAttributes<HTMLKiwiLoadingElement>;
            "kiwi-modal": LocalJSX.KiwiModal & JSXBase.HTMLAttributes<HTMLKiwiModalElement>;
            "kiwi-modal-footer": LocalJSX.KiwiModalFooter & JSXBase.HTMLAttributes<HTMLKiwiModalFooterElement>;
            "kiwi-pager": LocalJSX.KiwiPager & JSXBase.HTMLAttributes<HTMLKiwiPagerElement>;
            "kiwi-popover": LocalJSX.KiwiPopover & JSXBase.HTMLAttributes<HTMLKiwiPopoverElement>;
            "kiwi-ribbon": LocalJSX.KiwiRibbon & JSXBase.HTMLAttributes<HTMLKiwiRibbonElement>;
            "kiwi-searchbar": LocalJSX.KiwiSearchbar & JSXBase.HTMLAttributes<HTMLKiwiSearchbarElement>;
            "kiwi-sidebar": LocalJSX.KiwiSidebar & JSXBase.HTMLAttributes<HTMLKiwiSidebarElement>;
            "kiwi-skeleton": LocalJSX.KiwiSkeleton & JSXBase.HTMLAttributes<HTMLKiwiSkeletonElement>;
            "kiwi-sortable-label": LocalJSX.KiwiSortableLabel & JSXBase.HTMLAttributes<HTMLKiwiSortableLabelElement>;
            "kiwi-toasts": LocalJSX.KiwiToasts & JSXBase.HTMLAttributes<HTMLKiwiToastsElement>;
        }
    }
}
