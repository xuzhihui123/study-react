/*
 * @Author: Lancer
 * @Date:2020/4/26
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/26
 */
 const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');


 module.exports = override(
       fixBabelImports('import', {
             libraryName: 'antd',
         libraryDirectory: 'es',
         style: 'css',
       }),
     addDecoratorsLegacy()
 );