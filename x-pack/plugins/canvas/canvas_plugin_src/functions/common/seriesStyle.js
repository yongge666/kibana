/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

const name = 'seriesStyle';

export const seriesStyle = () => ({
  name,
  help:
    'Creates an object used for describing the properties of a series on a chart.' +
    ' You would usually use this inside of a charting function',
  context: {
    types: ['null'],
  },
  args: {
    label: {
      types: ['string'],
      help:
        'The label of the line this style applies to, not the name you would like to give the line',
    },
    color: {
      types: ['string', 'null'],
      help: 'Color to assign the line',
    },
    lines: {
      types: ['number'],
      displayName: 'Line width',
      help: 'Width of the line',
    },
    bars: {
      types: ['number'],
      help: 'Width of bars',
    },
    points: {
      types: ['number'],
      help: 'Size of points on line',
    },
    fill: {
      types: ['number', 'boolean'],
      help: 'Should we fill points?',
      default: false,
      options: [true, false],
    },
    stack: {
      types: ['number', 'null'],
      help:
        'Should we stack the series? This is the stack "id". Series with the same stack id will be stacked together',
    },
    horizontalBars: {
      types: ['boolean'],
      help: 'Sets the orientation of bars in the chart to horizontal',
      options: [true, false],
    },
  },
  fn: (context, args) => ({ type: name, ...args }),
});
