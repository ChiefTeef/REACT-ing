import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["Clean the dog", "eat a bagel", "Take over the world"]


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tasks: dummyData
    }
   render(){

     return (<ul>
      {this.props.tasks.map((task) => <li key={task}><input type="checkbox" value="1" />{task}</li>)}
    </ul>)
   }
  }

  class InputLine extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div>
          <form>
          <input type="text" name="todoadd"/>
          <input type="submit" name="submitadd" value="Todo Add" />
          </form>
        </div>
      )

    }
  }

  class TodoApp extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div>
          <InputLine />
          <TodoList tasks={dummyData} />
        </div>
      )

    }
  }



ReactDOM.render(<TodoApp />, document.getElementById('root'));
