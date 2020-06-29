const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// 按照使用antd的按需打包
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
