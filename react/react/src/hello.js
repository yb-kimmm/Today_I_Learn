import React, { Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음',
  };

  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// function Hello({name , color , isSpecial}){
//    return (
//       <div style={
//          {color}
//       }>
//          {isSpecial && 123}
//          안녕하세요 {name}
//       </div>

//    );
// }

Hello.defaultProps = {
  name: 'Tom',
};

export default Hello;
