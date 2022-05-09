const whiteBox = document.querySelector('.white-box');
const numBoxesInput = document.querySelector('#num-boxes');
const flexDirectionSelector = document.querySelector('#flex-direction');
const flexWrapSelector = document.querySelector('#flex-wrap');
const justifyContentSelector = document.querySelector('#justify-content');
const alignItemsSelector = document.querySelector('#align-items');
const alignContentSelector = document.querySelector('#align-content');
const button = document.querySelector('button');

// numBoxesInput.defaultValue = 8;
numBoxesInput.addEventListener('change', event => {
  let counter = event.target.value;
  let text = ''
  for (let i = 0; i < counter; i++) {
    text += '<div class="box"></div>';
  }
  whiteBox.innerHTML = text;
});

//whiteBox.style.flexDirection = 'column';
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

// button.addEventListener('click', () => {
//   numBoxesInput.value = 8;

//   flexDirectionSelector.value = 'row';

// })