import React, { Component } from "react";
import NewTaskAdd from "../components/homepage/NewTaskAdd";
import TopNavigation from "./common/TopNavigation";
import TodoList from "./homepage/TodoList";

const todoListData1 = [
    { title: 'First item', isCompleted: true },
    { title: 'Second item', isCompleted: false },
    { title: 'Third item', isCompleted: false }
];

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h2>ToDo List</h2>
            <NewTaskAdd />
            <div style={{ marginTop: "20px" }}>
              <TodoList todoListData1={todoListData1}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
