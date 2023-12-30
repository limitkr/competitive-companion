import * as fs from 'node:fs';
import * as path from 'node:path';
import { projectRoot } from '../utils';

export async function waitForBuild(): Promise<void> {
  const backgroundFile = path.resolve(projectRoot, 'build-extension/js/background.js');
  while (!fs.existsSync(backgroundFile)) {
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}
