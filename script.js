const whiteBox = document.querySelector('.white-box');
const numBoxesInput = document.querySelector('#num-boxes');
const flexDirectionSelector = document.querySelector('#flex-direction');
const flexWrapSelector = document.querySelector('#flex-wrap');
const justifyContentSelector = document.querySelector('#justify-content');
const alignItemsSelector = document.querySelector('#align-items');
const alignContentSelector = document.querySelector('#align-content');
const button = document.querySelector('button');


function reloadWhiteBox(number) {
  whiteBox.innerHTML = '';
  for (let i = 0; i < number; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.innerText = i+1;
    whiteBox.appendChild(box);
  }
}

function defaultInputs() {
  numBoxesInput.value = 5;
  flexDirectionSelector.value = 'row';
  flexWrapSelector.value = 'nowrap';
  justifyContentSelector.value = 'flex-start';
  alignItemsSelector.value = 'stretch';
  alignContentSelector.value = 'stretch';
}

function applyDefaults() {
  reloadWhiteBox(5);
  whiteBox.style.flexDirection = 'row';
  whiteBox.style.flexWrap = 'nowrap';
  whiteBox.style.justifyContent = 'flex-start';
  whiteBox.style.alignItems = 'stretch';
  whiteBox.style.alignContent = 'stretch';
}

numBoxesInput.addEventListener('change', event => reloadWhiteBox(event.target.value));

flexDirectionSelector.addEventListener('change', event => {
  whiteBox.style.flexDirection = event.target.value;
});

flexWrapSelector.addEventListener('change', event => {
  whiteBox.style.flexWrap = event.target.value;
});

justifyContentSelector.addEventListener('change', event => {
  whiteBox.style.justifyContent = event.target.value;
});

alignItemsSelector.addEventListener('change', event => {
  whiteBox.style.alignItems = event.target.value;
});

alignContentSelector.addEventListener('change', event => {
  whiteBox.style.alignContent = event.target.value;
});

button.addEventListener('click', () => {
  defaultInputs();
  applyDefaults();
})