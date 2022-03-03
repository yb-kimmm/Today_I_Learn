import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
  }

  // Render 이전
  componentWillMount() {}

  render() {
    return <></>;
  }

  // Render 이후
  componentDidMount() {}

  // 모든 작업 완료한 이후
  componentWillUnount() {}
}

export default LifeCycle;
