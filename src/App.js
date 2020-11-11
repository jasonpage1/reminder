import React, { Component } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

export class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      (
        <head>
          <title>Basics</title>
        </head>
      ),
      (
        <body>
          <h1> Basics</h1>
          <p>
            This is a <strong>paragraph</strong>.
          </p>
          <p>
            i learned this from{" "}
            <a href="https://www.youtube.com/watch?v=UB1O30fR-EE&t=386s">
              HTML Crash Course For Absolute Beginners{" "}
            </a>{" "}
            <p>
              {" "}
              you can use ul for unordered lists then us li for each item in the
              list EG:
            </p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <br></br>
              <p>
                you can use ul for unordered lists then us li for each item in
                the list EG:
              </p>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </ul>
          </p>
          <p>this is how you add a table</p>
          <table>
            {" "}
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              <td>jason</td>
              <td>24</td>
              <td>jason123jay@gmail.com</td>
            </tbody>
          </table>
          <br></br>
          <p> to make a line across the page us hr </p>
          <hr></hr>
          <p>
            this is how to create a form but you can only create the look of the
            form with HTML though
          </p>
          <br></br>
          <form action="prosses.php" method="POST">
            <label>FirstName</label>
            <input type="text" name="FirstName" placeholder="Enter First Name here"></input>
            
            <br></br>
            <label>LastName</label>
            <input type="text" name="LastName" placeholder="Enter Last Name here"></input>
            <br></br>
            <label>email</label>
            <input type="email" name="email" placeholder="Enter email here"></input>
            <br></br>
            <label>message</label>
            <textarea name="Message"></textarea>
            <br></br>
            <label>Gender</label>
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
<br></br>
<div>
            <label>Age</label>
            <input type="number" name="Age" value="24"></input>
            </div>
            <br></br>
            <div>
              <label>Birthday</label>
              <input type="date" name="Birthday"></input>
            </div>
            <div>
              <input type="submit" name="submit" value="submit"></input>
            </div>
          </form>
          <img src="pic.jfif"></img>
        </body>
      )
    );
  }
}
