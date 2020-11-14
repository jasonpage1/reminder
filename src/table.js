import React, { Component } from "react";

export class Table extends Component {
  render() {
    return (
      <div>
        <p>this is how you add a table</p>
        <table>
          {" "}
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>age</th>
              <th>item</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.props.tableTilteName}</td>
            <td>24</td>
            <td>jason123jay@gmail.com</td>
            <td>laptop</td>
          </tbody>
        </table>
        
      </div>
    );
  }
}
