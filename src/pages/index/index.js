import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'


@connect(({ counter }) => ({
  count: counter.count
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  add() {
    let count = this.props.count;
    this.props.dispatch({
      type: 'counter/updateState',
      payload: {
        count: count + 1,
      },
    });
  }

  dec() {
    let count = this.props.count;
    count -= 1;
    this.props.dispatch({
      type: 'counter/updateState',
      payload: {
        count,
      },
    });
  }

  render () {
    console.log(this.props.count);
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.add}>+</Button>
        <Button className='dec_btn' onClick={this.dec}>-</Button>
        <Button className='dec_btn' onClick={this.asyncAdd}>async</Button>
        <View><Text>{this.props.count}</Text></View>
      </View>
    )
  }
}

export default Index
