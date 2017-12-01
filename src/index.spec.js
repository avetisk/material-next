// @flow weak
/* eslint import/namespace: ['error', { allowComputed: true }] */
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */

import { assert } from 'chai';
import * as MaterialNext from './index';

describe('Material-Next', () => {
  it('should have exports', () => assert.ok(MaterialNext));

  it('should not do undefined exports', () => {
    Object.keys(MaterialNext).forEach(exportKey => assert.ok(MaterialNext[exportKey]));
  });
});
