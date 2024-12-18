import{Link} from 'react-router'

function Welcome() {



  return (
    <div className='welcome-div'>
        <h1>Welcome to your TO DO LIST</h1>
        <Link to="/todo">TASKS</Link>
        
        </div>
  )
}

export default Welcome