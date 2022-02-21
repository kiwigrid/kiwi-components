import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
} from '@stencil/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  tag: 'kiwi-searchbar',
  shadow: false,
})
export class KiwiSearchbar implements ComponentInterface {
  /**
   * The debounce time for the `triggerSearch` event in milliseconds.
   * Default: `400`
   */
  @Prop()
  debounce = 400;

  /**
   * The placeholder to use for the search input.
   */
  @Prop()
  placeholder = '';

  /** The input value */
  @Prop()
  value = '';

  /**
   * Event containing the search query.
   * Fired after `debounce` time, either on type, or on click (immediately).
   */
  @Event() triggerSearch!: EventEmitter<string>;

  private kiwiInput!: HTMLKiwiInputElement;
  private debouncedEmission: Subject<string> = new Subject();

  componentWillLoad(): void {
    this.debouncedEmission
      .pipe(
        tap((query) => {
          console.log('Query vor debounce:', query, this.debounce);
        }),
        debounceTime(this.debounce),
        tap((query) => {
          console.log('Query nach debounce:', query);
        }),
      )
      .subscribe((query) => this.emitTriggerSearch(query));
  }

  render(): JSX.Element {
    return (
      <div class="input-group">
        <kiwi-input
          ref={(el) => (this.kiwiInput = el as HTMLKiwiInputElement)}
          onInput={this.handleInput}
          name="search"
          placeholder={this.placeholder}
          value={this.value}
        ></kiwi-input>
        <span class="input-group-btn">
          {this.value && (
            <button
              aria-label="Clear"
              onClick={this.handleRemoveClick}
              class="btn btn-default btn-addon"
              type="button"
            >
              <span class="glyphicon glyphicon-remove"></span>
            </button>
          )}
          <button
            aria-label="Search"
            onClick={this.handleSearchClick}
            class="btn btn-primary btn-addon"
            type="button"
          >
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    );
  }

  private handleInput: () => void = () =>
    this.debouncedEmission.next(this.kiwiInput.value);

  private handleSearchClick: () => void = () =>
    this.emitTriggerSearch(this.kiwiInput.value);

  private handleRemoveClick: () => void = () => this.emitTriggerSearch('');

  private emitTriggerSearch(query: string): void {
    this.triggerSearch.emit(query);
  }
}
