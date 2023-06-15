
  const Header = (props) => {
    console.log(props)
  
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }


  const Part = (props) => {
    console.log(props)

    return(
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }

  
  const Content = (props) => {
    console.log(props)
    
  
    return(
      <div>
        
        <Part part = 'Fundamentals of React' exercises = '10'/>
        <Part part = 'Using props to pass data' exercises = '7'/>
        <Part part = 'State of a component' exercises = '14'/>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log(props)
    
  
    return(
      <div>
        <p>Number of exercises {props.total}</p>
      </div>
    )
  
  
  }

  

  const App  = () =>{
    const course = 'Half Stack application development'
    
    const total = 31
    
    return(
      <div>
        <Header course={course} />
        <Content/>
        <Total total ={total} />
      </div>
    )

  }

export default App





