import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults } from '@pnotify/core';
import { defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import refs from './refs';

defaultModules.set(PNotifyMobile, {});
defaults.styling = 'custom';

defaults.width = '370px';
defaults.minHeight = '50px';

import 'material-design-icons/iconfont/material-icons.css';

function noticeError(
  text = 'Houston, we have a problem',
  type = 'error',
  delay = 2000,
  
) {
  const stackUp = new Stack({
    dir1: 'down',
    dir2: 'left',
    firstpos1: 50, 
    firstpos2: 20,
    spacing1: 10,
    spacing2: 10,
    push: 'top',
    overlayClose: true,
    modal: false,
    context: document.body
  });
  
  const options = {
    text,
    type,
    stack: stackUp,
    delay,
  };
  alert(options);
}

export function noResultsFind() {
refs.loadMore.classList.add('hidden');
noticeError(
    `Please enter search word! `,
    'error',
    );
}

export function noMoreFound() {
noticeError(
    `No more images has been found!`,
    'error',
);
}

export function noMatchFound() {
 document.body.classList.add('loaded');
noticeError(
    `Sorry. No matches found!`,
    'error',
);
}