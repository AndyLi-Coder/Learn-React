import { PureComponent } from "react";

function renderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }
    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime

      console.log(`当前${OriginComponent.name}页面渲染的时间是${interval}ms`)
    }
    render() {
      return <OriginComponent {...this.props} />
    }
  }
}
export default renderTime