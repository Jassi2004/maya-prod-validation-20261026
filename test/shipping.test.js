import test from 'node:test';
import assert from 'node:assert/strict';
import { shippingTotal } from '../src/shipping.js';

test('shipping is free for orders of at least 50', () => {
  assert.equal(shippingTotal(50), 50);
});

test('smaller orders pay the configured flat fee', () => {
  assert.equal(shippingTotal(20, 7), 27);
});
