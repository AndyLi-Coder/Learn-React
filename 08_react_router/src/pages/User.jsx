import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    const { query } = this.props.router
    return (
      <div>
        <h1>user page - {query.name} -{ query.age }</h1>
      </div>
    )
  }
}

export default withRouter(User)