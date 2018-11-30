import React from 'react';
import './App.css';

let people = [
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: people
    }
  }



//------------------------rest --------------------------------------------------------

componentDidMount(){
  this.read();
}
create(people){
  fetch('https://api-agenda-telefonica.herokuapp.com/agenda', {
    method: 'post',
    body:JSON.stringify(people),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
  })
  .then(( retorno )=>{
    (retorno.json()).then((a)=> {
      this.read();
    });
  });
}
read(){
  fetch('https://api-agenda-telefonica.herokuapp.com/agenda', {
    method: 'get',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
  })
  .then(( retorno )=>{
    // console.log( retorno.json() );
    (retorno.json()).then((a)=> {
    this.setState({
        people: a
    })
    });
  });
}
update(){
}
delete(){
}

//-----------------------------------------------------------------------------------





  addPerson(person) {
    this.create(person);
  }

  render() {
    return (
      <div>
        <h1 className = "Tittle">Agenda Telefônica</h1>
        <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
        <PeopleList people={this.state.people} />
      </div>
    )
  }
}


class AddPerson extends React.Component {

  componentWillMount() {
    this.setState({
      firstName: "",
      email: "",
      phone: "",
      id:""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPerson(this.state)
  }

  handleChange(data) {
    let state = this.state;
    let name = data.target.name;
    state[name] = data.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className = "distanceA">
        <div className="person-add">
          <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
            <input className = 'forms' type="hidden" name="id" value={this.props.id} onChange={this.handleChange.bind(this)}/>

            <div className="form-field">
              <label>Name: </label>
              <input className = 'forms' type="text"
              name="firstName"
              value={this.props.firstname}
              onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-field">
              <label>Email: </label>
              <input className = 'forms' type="text"
              name="email"
              value={this.props.email}
              onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-field">
              <label>Phone: </label>
              <input className = 'forms' type="text"
              name="phone"
              value={this.props.phone}
              onChange={this.handleChange.bind(this)}
              />
            </div>
            <button className = "button" type="submit">Salvar</button>
          </form>
        </div>
      </div>
    )
  }
}

class PeopleList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
	updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let filteredPeople = this.props.people.filter(
      (person) => {
        var fullName = person.firstName.toLowerCase() + person.email.toLowerCase()
        return fullName.indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className = "distanceB">
        <div className="people-list">
        <div className= "search">
          <input type="text"
            className="search_input"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="Enter name or email"
          />
        </div>
          <ul className="list">
            {
              filteredPeople.map((person)=> {
                return  <Person person={person} />
              })
            }
        </ul>
        </div>
      </div>
    )
  }
}

class Person extends React.Component {


  delete(id){

    fetch('https://api-agenda-telefonica.herokuapp.com/modify/'+id, {
      method: 'delete',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
    .then(( retorno )=>{
      // console.log( retorno.json() );
      (retorno.json()).then((a)=> {
        window.location="/";
        console.log('removed');
      });
    });

  }

  setEdit(person){
    var firstName = window.prompt("Seu Nome:",person.firstName);
    var email = window.prompt("Seu Email:",person.email);
    var phone = window.prompt("Seu Telefone:",person.phone);
    var json = {firstName, email, phone};
    fetch('https://api-agenda-telefonica.herokuapp.com/modify/'+person.id, {
      method: 'put',
      body:JSON.stringify(json),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
    .then(( retorno )=>{
      (retorno.json()).then((a)=> {
        document.location="./";
      });
    });
  }

  render() {
    return (
      <li>
        <p>
          {this.props.person.firstName}<br/>
          {this.props.person.email} <br />
          {this.props.person.phone}<br/><br/>
          <a className = 'buttonB back1' href="#" onClick={this.setEdit.bind(this,this.props.person)}>Editar</a> <a className = 'buttonB back2' href="#" onClick={this.delete.bind(this,this.props.person.id)}>X</a>
        </p>
      </li>
    )
  }
}

export default App;
