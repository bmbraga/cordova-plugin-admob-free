import argscheck from 'cordova/argscheck'
import exec from 'cordova/exec'

export const AD_SIZE = {
  BANNER: 'BANNER',
  IAB_BANNER: 'IAB_BANNER',
  IAB_LEADERBOARD: 'IAB_LEADERBOARD',
  IAB_MRECT: 'IAB_MRECT',
  LARGE_BANNER: 'LARGE_BANNER',
  SMART_BANNER: 'SMART_BANNER',
}

export function setOptions(options, successCallback, failureCallback) {
  if (typeof options === 'object') {
    cordova.exec( successCallback, failureCallback, 'AdMob', 'setOptions', [ options ] )
  } else {
    if (typeof failureCallback === 'function') {
      failureCallback('options should be specified.')
    }
  }
}

export function createBannerView(options = {}, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'createBannerView', [ options ] )
}

export function createInterstitialView(options, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'createInterstitialView', [ options ] )
}

export function destroyBannerView(options = {}, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'destroyBannerView', [] )
}

export function requestInterstitialAd(options = {}, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'requestInterstitialAd', [ options ] )
}

export function showAd(show = true, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'showAd', [ show ] )
}

export function showInterstitialAd(show = true, successCallback, failureCallback) {
  cordova.exec( successCallback, failureCallback, 'AdMob', 'showInterstitialAd', [ show ] )
}

// emulate cordova-admob-pro interface

export function prepareInterstitial(args, successCallback, failureCallback) {
  createInterstitialView(args, successCallback, failureCallback)
  requestInterstitialAd(args, successCallback, failureCallback)
}

export function showInterstitial(successCallback, failureCallback) {
  showInterstitialAd(true, successCallback, failureCallback)
}
