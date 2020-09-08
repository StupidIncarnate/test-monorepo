const path = require('path');

module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ];
  const plugins = [
    [
      'module-resolver',
      {
        root: [path.resolve(__dirname)],
        alias: {
          common: path.resolve(__dirname, './containers/lib/common/src'),
          extra: path.resolve(__dirname, './containers/lib/extra/src'),
        },
        loglevel: 'verbose',
      },
    ],
  ];

  return {
    presets,
    plugins,
    ignore: ['node_modules'],
  };
};
