import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
  State,
} from '@stencil/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  repeat,
  takeUntil,
} from 'rxjs/operators';

@Component({
  tag: 'kiwi-pager',
  shadow: false,
})
export class KiwiPager implements ComponentInterface {
  /**
   * Debounce time in milliseconds (Default: 400)
   */
  @Prop()
  debounce = 400;

  /**
   * Zero based page number
   */
  @Prop({ reflect: true })
  page!: number;

  /**
   * Total pages
   */
  @Prop({ reflect: true })
  total!: number;

  /**
   * Translated "of" label (e.g. 3 of 10)
   */
  @Prop()
  ofLabel!: string;

  @State()
  error = false;

  /**
   * Event signaling a change of the page number.
   */
  @Event({
    eventName: 'pageChanged',
    bubbles: true,
  })
  pageChanged!: EventEmitter<{ page: number }>;

  private input!: HTMLInputElement;
  private pageChangedDebouncer: Subject<number> = new Subject();
  private cancelPageChange: Subject<void> = new Subject();

  componentDidLoad(): void {
    this.pageChangedDebouncer
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.debounce),
        takeUntil(this.cancelPageChange),
        // repeats on completion (in case it got canceled by `cancelPageChange`)
        repeat(),
      )
      .subscribe((value: number) => {
        this.pageChanged.emit({ page: value });
      });
  }

  render(): JSX.Element {
    return (
      this.total > 1 && (
        <div class="pager" style={{ 'max-width': '250px' }}>
          <nav
            role="navigation"
            aria-label="Pagination Navigation"
            class="input-group"
          >
            <div class="pager-buttons input-group-btn">
              <button
                aria-label="Previous Page"
                type="button"
                class="btn btn-default"
                disabled={this.page === 0}
                onClick={this.handleDecrementPage}
              >
                <span class="glyphicon glyphicon-chevron-left" />
              </button>
            </div>
            <div class={this.error ? 'has-error' : ''}>
              <input
                min={1}
                max={this.total}
                type="text"
                class="form-control pager-input"
                value={this.page + 1}
                ref={(element?: HTMLInputElement) => {
                  this.input = element as HTMLInputElement;
                }}
                onInput={this.handleInputChange}
                arial-label="Current Page"
              />
            </div>
            <span class="input-group-addon">
              {this.ofLabel} {this.total}
            </span>
            <div class="pager-buttons input-group-btn">
              <button
                aria-label="Next Page"
                type="button"
                class="btn btn-default"
                disabled={this.page === this.total - 1}
                onClick={this.handleIncrementPage}
              >
                <span class="glyphicon glyphicon-chevron-right" />
              </button>
            </div>
          </nav>
        </div>
      )
    );
  }

  private handleIncrementPage: () => void = () =>
    this.changePage(Math.min(this.page + 1, this.total - 1));

  private handleDecrementPage: () => void = () =>
    this.changePage(Math.max(this.page - 1, 0));

  private handleInputChange: () => void = () => {
    try {
      const value: number = parseInt(this.input.value) - 1;
      if (value >= this.total || value < 0 || isNaN(value)) {
        this.error = true;
        this.cancelPageChange.next();
        throw new Error('Validation failed');
      } else {
        this.changePage(value, false);
      }
    } catch (e) {}
  };

  private changePage(number: number, immediate = true): void {
    this.error = false;
    this.page = number;
    immediate
      ? this.pageChanged.emit({ page: number })
      : this.pageChangedDebouncer.next(number);
  }
}
