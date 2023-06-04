import styled from 'styled-components'
import * as vari from './style/variable'

// Css in js 的基本使用
export const AppWrapper = styled.div`
.footer{
  border: 1px solid orange;
  color: ${props => props.theme.color};
  size: ${props => props.theme.size};
}

`

// 2.可以将子元素的样式抽取到一个新的样式组件中

export const SectionWrapper = styled.div.attrs(props => ({
  textColor: props.color || 'blue'
}))`
/* 4.可以通过attrs给标签模板提供属性 */
  border: 1px solid red;
  .title {
    font-size: ${vari.middleSize};
    color: ${vari.primaryColor};
    &:hover {
      background-color: textColor;
    }
  }
  /* 3.可以接受外部传入的props */
  .content {
    font-size: ${props => props.size};
    color: ${props => props.color};
  }

`