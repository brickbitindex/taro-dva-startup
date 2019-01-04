
  import Taro, { Component } from '@tarojs/taro';
  import { View } from '@tarojs/components';
  import { connect } from '@tarojs/redux';
  import './index.scss';

  @connect(({ product }) => ({
    ...product,
  }))

  export default class Product extends Component {
    config = {
      navigationBarTitleText: 'Product'
    }

    componentDidMount() {}

    render() {
      return (
        <View className='product-page'>
          Product
        </View>
      );
    }
  }
