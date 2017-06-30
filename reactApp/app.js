import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{ taskText: "Catch 'em all", completed: false }, { taskText: "Eat a bagel", completed: true}, { taskText: "Take over the world, Pinky", completed: false }]


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tasks: dummyData
    }
   render(){

     return (<ul>
      {this.props.tasks.map((task) => { if(task.completed){
        return <li key={task.taskText}><input type="checkbox" value="1" /> <strike> {task.taskText} </strike></li>
      }else{
        return <li key={task.taskText}><input type="checkbox" value="1" />{task.taskText}</li>
      }
    })}
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
