import { assert } from 'chai';
import capcon from 'capture-console';
import pjson from '../package.json' assert { type: "json" };
import { writeFileSync } from 'fs';
import { spawnSync } from 'child_process';

// describe('collmex-client check version utility', function () {
//   before(function () {
//     const npmData = JSON.parse(spawnSync('npm', ['view', 'collmex-client', '--json']).stdout.toString());
//     remoteVer = npmData.version;
//   });
//   it('should warn if version is behind on patches', function () {
//     updatePjsonVersion(getWrongVersion(remoteVer, 2));
//     test(true);
//   });
//   it('should warn if version is behind on minors', function () {
//     updatePjsonVersion(getWrongVersion(remoteVer, 1));
//     test(true);
//   });
//   it('should warn if version is behind on majors', function () {
//     updatePjsonVersion(getWrongVersion(remoteVer, 0));
//     test(true);
//   });
//   it('should not warn if version is latest', function () {
//     updatePjsonVersion(remoteVer);
//     test(false);
//   });
//   after(function () {
//     writeFileSync(`${process.cwd()}/package.json`, JSON.stringify(pjson, null, 2), 'utf8');
//   });
// });


