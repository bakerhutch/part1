import React from "react";

const App = () => {
  //const-definitions
  /*const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14; */

  //Step 3: changing definitions to Objects

  /*const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } */

  //Step 4, parts as an array of objects

  /*const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] */

  //Step 5, single JS object

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log("App component");
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>

    /* starting template
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
    */
  );
};

const Header = (props) => {
  console.log("Header component");
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("Content component");
  const newArr = props.course.parts.map(x => x)
  console.log(newArr)
  return (
    <>
      <Part part={newArr[0].name} exercise={newArr[0].exercises} />
      <Part part={newArr[1].name} exercise={newArr[1].exercises} />
      <Part part={newArr[2].name} exercise={newArr[2].exercises} />
    </>
    /*
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
    */
  );
};

const Part = (props) => {
  console.log("Part component")
  console.log(props)
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log("Total component")
  console.log(props)
  const newArr = props.course.parts.map(x => x)
  return (
    <>
      <p>
        Number of exercises {newArr[0].exercises + newArr[1].exercises + newArr[2].exercises}
      </p>
    </>
  );
};

export default App;
