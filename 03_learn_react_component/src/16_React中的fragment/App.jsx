import React, { Fragment, PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      sections: [
        {title:'1312313',name:'1'},
        {title:'1312313',name:'2'},
        {title:'1312313',name:'3'},
        {title:'1312313',name:'4'},
        {title:'1312313',name:'5'},
      ]
    }
  }
  render() {
    const { sections } = this.state
    return (
      /* Fragment中相当于vue中的代码片段template */

      /*
      <Fragment>
        <h1>我是标题</h1>
        <p>我是内容</p>
      </Fragment>
       */

      /* 语法糖 */
      /* 但是在列表渲染的时候，如果有key则不能使用语法糖 */
      <>
        <h1>我是标题</h1>
        <p>我是内容</p>
        <hr />
        {
          sections.map(item => {
            return (
              <Fragment key={item.name}>
                <h2>{item.title}</h2>
                <p>{item.name}</p>
              </Fragment>
            )
          })
        }
      </> 
      
    )    
  }
}

export default App