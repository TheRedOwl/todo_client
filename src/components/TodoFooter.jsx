import React from 'react'

const TodoFooter = ({nrTask}) => {
  return (
    <div>
      <footer style={{position:"fixed",bottom:"5px",right:"5px"}}>
        Tasks left: {nrTask}
      </footer>
    </div>
  )
}

export default TodoFooter
