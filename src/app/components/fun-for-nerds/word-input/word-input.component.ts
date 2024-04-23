import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  @Output() partialWord = new EventEmitter<string>();   // someone is typing
  @Output() word = new EventEmitter<string>();          // someone has pressed submit

  currentWord = '';

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.partialWord.emit;
    this.currentWord = input.value;
  }

  onSubmit() {
    this.word.emit(this.currentWord)
  }
}
