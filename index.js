const keyboardButtons = {
  Backquote: { rusKey: { lower: 'ё', shift: 'Ё' }, engKey: { lower: '`', shift: '~' } },
  Digit1: { rusKey: { lower: '1', shift: '!' }, engKey: { lower: '1', shift: '!' } },
  Digit2: { rusKey: { lower: '2', shift: '"' }, engKey: { lower: '2', shift: '@' } },
  Digit3: { rusKey: { lower: '3', shift: '№' }, engKey: { lower: '3', shift: '#' } },
  Digit4: { rusKey: { lower: '4', shift: ';' }, engKey: { lower: '4', shift: '$' } },
  Digit5: { rusKey: { lower: '5', shift: '%' }, engKey: { lower: '5', shift: '%' } },
  Digit6: { rusKey: { lower: '6', shift: ':' }, engKey: { lower: '6', shift: '^' } },
  Digit7: { rusKey: { lower: '7', shift: '?' }, engKey: { lower: '7', shift: '&' } },
  Digit8: { rusKey: { lower: '8', shift: '*' }, engKey: { lower: '8', shift: '*' } },
  Digit9: { rusKey: { lower: '9', shift: '(' }, engKey: { lower: '9', shift: '(' } },
  Digit0: { rusKey: { lower: '0', shift: ')' }, engKey: { lower: '0', shift: ')' } },
  Minus: { rusKey: { lower: '-', shift: '_' }, engKey: { lower: '-', shift: '_' } },
  Equal: { rusKey: { lower: '=', shift: '+' }, engKey: { lower: '=', shift: '+' } },
  Backspace: { text: 'Backspace', isControl: true },
  Tab: { text: 'Tab', isControl: true },
  KeyQ: { rusKey: { lower: 'й' }, engKey: { lower: 'q' }, isAlpha: true },
  KeyW: { rusKey: { lower: 'ц' }, engKey: { lower: 'w' }, isAlpha: true },
  KeyE: { rusKey: { lower: 'у' }, engKey: { lower: 'e' }, isAlpha: true },
  KeyR: { rusKey: { lower: 'к' }, engKey: { lower: 'r' }, isAlpha: true },
  KeyT: { rusKey: { lower: 'е' }, engKey: { lower: 't' }, isAlpha: true },
  KeyY: { rusKey: { lower: 'н' }, engKey: { lower: 'y' }, isAlpha: true },
  KeyU: { rusKey: { lower: 'г' }, engKey: { lower: 'u' }, isAlpha: true },
  KeyI: { rusKey: { lower: 'ш' }, engKey: { lower: 'i' }, isAlpha: true },
  KeyO: { rusKey: { lower: 'щ' }, engKey: { lower: 'o' }, isAlpha: true },
  KeyP: { rusKey: { lower: 'з' }, engKey: { lower: 'p' }, isAlpha: true },
  BracketLeft: { rusKey: { lower: 'х', shift: 'Х' }, engKey: { lower: '[', shift: '{' } },
  BracketRight: { rusKey: { lower: 'ъ', shift: 'Ъ' }, engKey: { lower: ']', shift: '}' } },
  Backslash: { rusKey: { lower: '\\', shift: '/' }, engKey: { lower: '\\', shift: '|' } },
  Delete: { text: 'Del', isControl: true },
  CapsLock: { text: 'CapsLock', isControl: true },
  KeyA: { rusKey: { lower: 'ф' }, engKey: { lower: 'a' }, isAlpha: true },
  KeyS: { rusKey: { lower: 'ы' }, engKey: { lower: 's' }, isAlpha: true },
  KeyD: { rusKey: { lower: 'в' }, engKey: { lower: 'd' }, isAlpha: true },
  KeyF: { rusKey: { lower: 'а' }, engKey: { lower: 'f' }, isAlpha: true },
  KeyG: { rusKey: { lower: 'п' }, engKey: { lower: 'g' }, isAlpha: true },
  KeyH: { rusKey: { lower: 'р' }, engKey: { lower: 'h' }, isAlpha: true },
  KeyJ: { rusKey: { lower: 'о' }, engKey: { lower: 'j' }, isAlpha: true },
  KeyK: { rusKey: { lower: 'л' }, engKey: { lower: 'k' }, isAlpha: true },
  KeyL: { rusKey: { lower: 'д' }, engKey: { lower: 'l' }, isAlpha: true },
  Semicolon: { rusKey: { lower: 'ж', shift: 'Ж' }, engKey: { lower: ';', shift: ':' } },
  Quote: { rusKey: { lower: 'э', shift: 'Э' }, engKey: { lower: '\'', shift: '"' } },
  Enter: { text: 'Enter', isControl: true },
  ShiftLeft: { text: 'Shift', isControl: true },
  KeyZ: { rusKey: { lower: 'я' }, engKey: { lower: 'z' }, isAlpha: true },
  KeyX: { rusKey: { lower: 'ч' }, engKey: { lower: 'x' }, isAlpha: true },
  KeyC: { rusKey: { lower: 'с' }, engKey: { lower: 'c' }, isAlpha: true },
  KeyV: { rusKey: { lower: 'м' }, engKey: { lower: 'v' }, isAlpha: true },
  KeyB: { rusKey: { lower: 'и' }, engKey: { lower: 'b' }, isAlpha: true },
  KeyN: { rusKey: { lower: 'т' }, engKey: { lower: 'n' }, isAlpha: true },
  KeyM: { rusKey: { lower: 'ь' }, engKey: { lower: 'm' }, isAlpha: true },
  Comma: { rusKey: { lower: 'б', shift: 'Б' }, engKey: { lower: ',', shift: '<' } },
  Period: { rusKey: { lower: 'ю', shift: 'Ю' }, engKey: { lower: '.', shift: '>' } },
  Slash: { rusKey: { lower: '.', shift: ',' }, engKey: { lower: '/', shift: '?' } },
  ArrowUp: { rusKey: { lower: '▲', shift: '▲' }, engKey: { lower: '▲', shift: '▲' } },
  ShiftRight: { text: 'Shift', isControl: true },
  ControlLeft: { text: 'Ctrl', isControl: true },
  MetaLeft: { text: 'Win', isControl: true },
  AltLeft: { text: 'Alt', isControl: true },
  Space: { text: '', isControl: true },
  AltRight: { text: 'Alt', isControl: true },
  ArrowLeft: { rusKey: { lower: '◄', shift: '◄' }, engKey: { lower: '◄', shift: '◄' } },
  ArrowDown: { rusKey: { lower: '▼', shift: '▼' }, engKey: { lower: '▼', shift: '▼' } },
  ArrowRight: { rusKey: { lower: '►', shift: '►' }, engKey: { lower: '►', shift: '►' } },
  ControlRight: { text: 'Ctrl', isControl: true },
};
const keyBoardRows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];
const savedLanguage = window.localStorage.getItem('language');
let currentLanguage = savedLanguage || 'rus';
let isUpperCase = false;

function renderButton(buttonCode) {
  const button = keyboardButtons[buttonCode];
  if (button.isControl) {
    return `<div class="keyboard__button button-${buttonCode} button--special" data-code="${buttonCode}"><span class="button__text">${button.text}</span></div>`;
  }
  const { rusKey, engKey } = button;
  if (button.isAlpha) {
    rusKey.shift = rusKey.lower.toUpperCase();
    engKey.shift = engKey.lower.toUpperCase();
  }
  return `
    <div class="keyboard__button button-${buttonCode} button--symbol" data-code="${buttonCode}">
        <span class="button__rus ${currentLanguage === 'eng' ? 'hidden' : ''}"><span class="button--case-up hidden">${rusKey.shift}</span><span class="button--case-down">${rusKey.lower}</span></span>
        <span class="button__eng ${currentLanguage === 'rus' ? 'hidden' : ''}"><span class="button--case-up hidden">${engKey.shift}</span><span class="button--case-down">${engKey.lower}</span></span>
    </div>
    `;
}

function renderBody() {
  return `
    <div class="main-wrapper">
      <span class="task-name">Виртуальная клавиатура</span>
      <textarea class="textarea-main" id="textarea" rows="15" cols="133"></textarea>
      <div class="keyboard-wrapper">
        ${keyBoardRows.map((buttons) => `
          <div class="keyboard__row">
            ${buttons.map((buttonCode) => renderButton(buttonCode)).join('')}
          </div>`).join('')}
      </div>
      <p class="lang">Комбинация для переключения языка: левые ctrl+ alt</p>
      <p class="system">Клавиатура создана в операционной системе macOS Mojave </p>
    </div>`;
}

document.body.innerHTML = renderBody();

const textarea = document.getElementById('textarea');

function changeLanguage() {
  const nextLang = currentLanguage === 'rus' ? 'eng' : 'rus';
  const lang = document.querySelectorAll('.button__rus, .button__eng');
  for (let i = 0; i < lang.length; i += 1) {
    if (lang[i].classList.contains('hidden')) {
      lang[i].classList.remove('hidden');
    } else {
      lang[i].classList.add('hidden');
    }
  }
  currentLanguage = nextLang;
  window.localStorage.setItem('language', currentLanguage);
}

function removeCurrentActiveButton() {
  const curActive = document.querySelector('.button--active');
  if (curActive) {
    curActive.classList.remove('button--active');
  }
}

function changeCase() {
  isUpperCase = !isUpperCase;
  const letters = document.querySelectorAll(`.button__${currentLanguage}>span`);
  letters.forEach((letter) => {
    if (letter.classList.contains('hidden')) {
      letter.classList.remove('hidden');
    } else {
      letter.classList.add('hidden');
    }
  });
}

function handleUpKeyCode(eventCode) {
  removeCurrentActiveButton();
  if (eventCode === 'ControlLeft') {
    document.removeEventListener('keydown', changeLanguage);
  }
  if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
    changeCase();
  }
}

function markButtonAsActive(button) {
  button.classList.add('button--active');
}

function addToTextarea(letter) {
  const caretPosition = textarea.selectionStart;
  const currentValue = textarea.value;
  const newVal = currentValue.slice(0, caretPosition) + letter + currentValue.slice(caretPosition);
  textarea.value = newVal;
  textarea.selectionStart = caretPosition + 1;
  textarea.selectionEnd = caretPosition + 1;
}

function removeBeforeCaretPosition() {
  const caretPosition = textarea.selectionStart;
  const currentValue = textarea.value;
  textarea.value = currentValue.slice(0, caretPosition - 1) + currentValue.slice(caretPosition);
  textarea.selectionStart = caretPosition - 1;
  textarea.selectionEnd = caretPosition - 1;
}

function removeAfterCaretPosition() {
  const caretPosition = textarea.selectionStart;
  const currentValue = textarea.value;
  textarea.value = currentValue.slice(0, caretPosition) + currentValue.slice(caretPosition + 1);
  textarea.selectionStart = caretPosition;
  textarea.selectionEnd = caretPosition;
}

function handleDownKeyCode(eventCode) {
  if (eventCode === 'ControlLeft') {
    document.addEventListener('keydown', changeLanguage);
  }
  if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight' || eventCode === 'CapsLock') {
    changeCase();
  }
  if (eventCode === 'Backspace') {
    removeBeforeCaretPosition();
  }
  if (eventCode === 'Delete') {
    removeAfterCaretPosition();
  }
  if (eventCode === 'Tab') {
    addToTextarea('\t');
  }
  if (eventCode === 'Enter') {
    addToTextarea('\n');
  }
  if (!keyboardButtons[eventCode].isControl) {
    const letter = keyboardButtons[eventCode][`${currentLanguage}Key`][isUpperCase ? 'shift' : 'lower'];
    addToTextarea(letter);
  }
}

document.addEventListener('mousedown', (event) => {
  const keyboardButton = event.target.closest('.keyboard__button');
  if (keyboardButton) {
    event.preventDefault();
    markButtonAsActive(keyboardButton);
    handleDownKeyCode(keyboardButton.dataset.code);
  }
});

document.addEventListener('mouseup', (event) => {
  removeCurrentActiveButton();
  const keyboardButton = event.target.closest('.keyboard__button');
  if (keyboardButton) {
    handleUpKeyCode(keyboardButton.dataset.code);
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const codeButton = document.querySelector(`.button-${event.code}`)
  if (codeButton) {
    handleDownKeyCode(event.code);
    codeButton.classList.add('button--active');
  }

});

document.addEventListener('keyup', (event) => handleUpKeyCode(event.code));
