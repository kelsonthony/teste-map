'use strict'

import { expect } from 'chai'
import map from './map'

it('map should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1, 2], (item) => item) should return [1, 2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4] (item) =>) should return [1, 2]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})