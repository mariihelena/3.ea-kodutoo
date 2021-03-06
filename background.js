// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

chrome.alarms.onAlarm.addListener(function() {
	let sound = new Audio();
	sound.src = "sound.mp3";
	sound.play();
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'icon.png',
      title:    'Aeg vett juua',
      message:  'Ära unusta vett juua! :)',
      buttons: [
        {title: 'Joo veel'}
      ],
      priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: item.minutes});
  });
});