/* eslint import/no-commonjs:0 */
const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：node template.js test');
  process.exit(0);
}

const indexTemplate = `
  import Taro, { Component } from '@tarojs/taro';
  import { View } from '@tarojs/components';
  import { connect } from '@tarojs/redux';
  import './index.scss';

  @connect(({ ${dirName.toLocaleLowerCase()} }) => ({
    ...${dirName.toLocaleLowerCase()},
  }))

  export default class ${dirName} extends Component {
    config = {
      navigationBarTitleText: '${dirName}'
    }

    componentDidMount() {}

    render() {
      return (
        <View className='${dirName.toLocaleLowerCase()}-page'>
          ${dirName}
        </View>
      );
    }
  }
`;

const cssTemplate = `
  .${dirName.toLocaleLowerCase()}-page {
    width: 100%;
    height: 100vh;
  }
`;

const modelsTemplate = `export default {
    namespace: '${dirName.toLocaleLowerCase()}',
    subscriptions: {},
    state: {},
    effects: {},
    reducers: {
      updateState(state, { payload }) {
        return { ...state, ...payload };
      }
    },
  }
`;

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.js', indexTemplate);
fs.writeFileSync('index.scss', cssTemplate);

process.chdir('../../models');
fs.writeFileSync(`${dirName.toLocaleLowerCase()}.js`, modelsTemplate);

process.exit(0);
