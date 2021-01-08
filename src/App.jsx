import React from 'react'; 
import Feedback from './components/Feedback/Feedback';
import Phonebook from './components/phonebook/Phonebook';
import ContactList from './components/phonebook/ContactList';
import Filter from './components/phonebook/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // name: '',
    filter: '',
  }
  deleteContact = (id) =>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id)
    }))
  }

  addContact = newCont => {
    const ku = this.state.contacts.find(i=>i.name === newCont.name)    
    if (ku){      
      console.log('ужо есть');
      alert(`${newCont.name} уже есть`);
      return
    }

    const newContacts = this.state.contacts;
    newContacts.push(newCont)    
    this.setState({['contacts']: newContacts})
  }

  changeFilter = e =>{
    this.setState({ filter: e.currentTarget.value});
  };

  deleteContact = (id) =>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id)
    }))
  }
 


  render(){
    const { contacts, filter } = this.state;
    
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter((contacts) => contacts.name.toLowerCase().includes(normalizeFilter))

    return (
      <div>
        <Feedback/>
        <hr></hr>
        <Phonebook onSubmit={this.addContact}/>

        <Filter value={filter} onChange={this.changeFilter}/>

        <ContactList contacts={visibleContact} onDeleteContact={this.deleteContact}/>
        

        
  
      </div>
    )
  }  
}
