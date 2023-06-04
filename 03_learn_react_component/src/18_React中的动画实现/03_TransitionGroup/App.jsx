import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        {id:1,name:"你不知道的JS",price:99},
        {id:2,name:"JS高级程序设计",price:96},
        {id:3,name:"React高级程序设计",price:98},
      ]
    }
  }
  addBook() {
    const books = [...this.state.books]
    books.push({ id: new Date().getTime(), name: 'Vue高级程序设计', price: 123 })
    this.setState({books})
  }
  removeBook(index) {
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({books})
  }
  render() {
    const { books }  = this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <TransitionGroup component='ul'>
          {
            books.map((item, index) => {
              return (
                <CSSTransition key={item.id} classNames='book' timeout={1000}>
                  <li>
                    <span>{item.name} - {item.price}</span>
                    <button onClick={e => this.removeBook(index)}>删除</button>
                  </li>
                </CSSTransition>
             )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App