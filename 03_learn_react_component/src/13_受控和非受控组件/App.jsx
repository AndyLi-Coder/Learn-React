import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        {text:'唱',value:'sing',isChecked:false},
        {text:'跳',value:'dance',isChecked:false},
        {text:'rap',value:'rap',isChecked:false},
      ],
      fruit: ['orange'],
      introValue:'哈哈哈'
    }
    this.introRef = createRef()
  }
  componentDidMount() {
    // 在此操作受控组件DOM
    // this.introRef.current.addEventListener 
  }
  handleSubmit(event) {
    // 1.阻止浏览器的默认行为-打开新页面
    event.preventDefault()
    // 2.获取所有的表单数据
    console.log('获取表单数据', this.state.username, this.state.password, this.state.isAgree)
    console.log('获取的爱好数据是', this.state.hobbies.filter(item => item.isChecked).map(item => item.value))
    console.log('获取受控组件的值',this.introRef.current.value)
    // 3.以网络请求的方式，将数据传递给服务器

  }
  handleChangeInput(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleChangeAgree(event) {
    this.setState({
      isAgree:event.target.checked
    })
  }
  handleHobbiesChange(event,index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({hobbies})
  }
  handleSelectChange(event) {
    // console.log(event.target.selectedOptions)
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    console.log(values,'选中的水果')
    this.setState({fruit:values})
  }
  render() {
    const { username,password,isAgree,hobbies,fruit,introValue } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="inp">
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={e => this.handleChangeInput(e)}
              />
            </label> 
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => this.handleChangeInput(e)}
              />
            </label> 
          </div>
          {/* 单选 */}
          <div>
            <label htmlFor="agree">
              <input
                type="checkbox"
                id="agree"
                checked={isAgree}
                onChange={e => this.handleChangeAgree(e)}
              />同意协议
            </label>
          </div>
          {/* 多选 */}
          <div>
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={e => this.handleHobbiesChange(e,index)}
                    />
                    <span>{item.text}</span>
                  </label>
                )
              })
            }
          </div>
          {/* select */}
          <div>
            <select value={fruit} onChange={e => this.handleSelectChange(e)} multiple>
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
              <option value="banana">香蕉</option>
            </select>
          </div>
          {/* 非受控组件 */}
          <div>
            <input type="text" defaultValue={introValue} ref={this.introRef}/>
          </div>
          <div>
            <button className="btn" type="submit">注册</button>
          </div>
       </form>
      </div>
    )
  }
}

export default App 