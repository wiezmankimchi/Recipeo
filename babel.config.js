module.exports = function ( api ) {
  api.cache( true );
  return {

    presets: [ "babel-preset-expo" ],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@images": "./assets/images",
            "@": "./src",
            "@components": "./src/common/components",
            "@elements": "./src/common/components/elements",
            "@hoc": "./src/common/hoc",
            "@hooks": "./src/common/hooks",
            "@layouts": "./src/common/layouts",
            "@appTypes": "./src/common/types",
            "@lib": "./src/lib",
            "@modules": "./src/modules",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@utils": "./src/utils",
            "@constants": "./src/utils/constants",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: [ 'react-native-paper/babel' ],
      },
    },
  };
};
