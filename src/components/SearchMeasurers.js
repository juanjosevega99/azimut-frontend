import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date(),
    editing: false,
    _id: ''
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users')
    if (res.data.length > 0) {
      this.setState({
        users: res.data.map(user => user.username),
        userSelected: res.data[0].username
      })
      if (this.props.match.params.id) {
        const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id)
        this.setState({
          title: res.data.title,
          content: res.data.content,
          date: new Date(res.data.date),
          userSelected: res.data.author,
          editing: true,
          _id: this.props.match.params.id
        })
      }
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    }
    if (this.state.editing) {
      await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote)
    } else {
      await axios.post('http://localhost:4000/api/notes', newNote)
    }
    window.location.href = '/'
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({ date })
  }

  render() {
    return (
      <header>
        <nav>
          <section className="nav-logo-container">
            <a href="https://www.azimutenergia.co/" />
            <img src="https://www.azimutenergia.co/wp-content/uploads/2019/05/LogoAzimut.png" alt="logo of Azimut" />
          </section>
          <section className="profile">User</section>
        </nav>
      </header>
    )
  }
}
