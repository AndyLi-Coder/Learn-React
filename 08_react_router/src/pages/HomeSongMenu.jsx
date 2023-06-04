import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeSongMenu extends PureComponent {
  constructor() {
    super()
    this.state = {
      songMenus: [
        { id: 123, name: "华语歌曲1" },        
        { id: 124, name: "华语歌曲2" },        
        { id: 125, name: "华语歌曲3" },        
      ]
    }
  }
  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }
  render() {
    const { songMenus } = this.state
    return (
      <div>
        <h2>HomeSongMenu Page</h2>
        <ul>
          {
            songMenus.map(item => {
              return <li key={item.id} onClick={e => this.navigateTo(`/detail/${item.id}`)}>{ item.name }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)