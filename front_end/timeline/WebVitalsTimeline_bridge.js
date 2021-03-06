// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* WARNING: do not modify this file by hand!
* it was automatically generated by the bridge generator
* if you made changes to the source code and need to update this file, run:
*  npm run generate-bridge-file front_end/timeline/WebVitalsTimeline.ts
*/

import './WebVitalsTimeline.js';
/**
* @typedef {{
* startTime:number,
* duration:number,
* fcps:(!Array.<!WebVitalsFCPEvent>|undefined),
* lcps:(!Array.<!WebVitalsLCPEvent>|undefined),
* layoutShifts:(!Array.<!WebVitalsLayoutShiftEvent>|undefined),
* longTasks:(!Array.<!WebVitalsTimelineTask>|undefined),
* mainFrameNavigations:(!Array.<number>|undefined),
* maxDuration:(number|undefined),
* }}
*/
// @ts-ignore we export this for Closure not TS
export let WebVitalsTimelineData;
/**
* @typedef {{
* timestamp:number,
* }}
*/
// @ts-ignore we export this for Closure not TS
export let WebVitalsFCPEvent;
/**
* @typedef {{
* timestamp:number,
* }}
*/
// @ts-ignore we export this for Closure not TS
export let WebVitalsLCPEvent;
/**
* @typedef {{
* timestamp:number,
* }}
*/
// @ts-ignore we export this for Closure not TS
export let WebVitalsLayoutShiftEvent;
/**
* @typedef {{
* start:number,
* duration:number,
* }}
*/
// @ts-ignore we export this for Closure not TS
export let WebVitalsTimelineTask;
// eslint-disable-next-line no-unused-vars
export class WebVitalsTimelineClosureInterface extends HTMLElement {
  /**
  * @return {!CanvasRenderingContext2D}
  */
  getContext() {
    throw new Error('Not implemented in _bridge.js');
  }
  /**
  * @return {number}
  */
  getLineHeight() {
    throw new Error('Not implemented in _bridge.js');
  }
  /**
  * @param {number} x
  * @return {number}
  */
  tX(x) {
    throw new Error('Not implemented in _bridge.js');
  }
  /**
  * @param {number} duration
  * @return {number}
  */
  tD(duration) {
    throw new Error('Not implemented in _bridge.js');
  }
  /**
  * @param {number} width
  * @param {number} height
  * @return {void}
  */
  setSize(width, height) {
  }
  /**
  * @param {number} time
  * @return {number}
  */
  getTimeSinceLastMainFrameNavigation(time) {
    throw new Error('Not implemented in _bridge.js');
  }
  /**
  * @return {void}
  */
  render() {
  }
  /**
  * @param {!WebVitalsTimelineData} data
  */
  set data(data) {
  }
}
/**
* @return {!WebVitalsTimelineClosureInterface}
*/
export function createWebVitalsTimeline() {
  return /** @type {!WebVitalsTimelineClosureInterface} */ (document.createElement('devtools-timeline-webvitals'));
}
