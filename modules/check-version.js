import { readFileSync } from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'
import pjson from '../package.json' assert { type: "json" };

const checkVersion = () => {
  const pkgName = pjson.name
  const localVer = pjson.version
  let npmData
  if (process.platform === 'win32') {
    npmData = JSON.parse(spawnSync('npm.cmd', ['view', pkgName, '--json']).stdout.toString())
  } else {
    npmData = JSON.parse(spawnSync('npm', ['view', pkgName, '--json']).stdout.toString())
  }
  const remoteVer = npmData.version
  if (checkSum(localVer) < checkSum(remoteVer)) {
    console.log(`WARNING: your local version of ${pkgName} is ${localVer} while the latest available version on npm is ${remoteVer}. Please consider updating your client as you may be using an outdated CSV mapping...`)
  }
}

function checkSum(ver) {
  // here we do a weighted check sum where major version has a weight of 100, minor has 10 and patch has 1. We disregard the beta/alpha flags as we probably won't be using them
  return ver
    .split('.')
    .reduce((acc, cur, i) => acc + (10 ** (2 - i)) * cur, 0)
}

export default checkVersion;
