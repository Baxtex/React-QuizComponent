import React, {Component} from 'react'

class QuizEnd extends Component { //Varför kan inte denna componentetn renderas på ett struktuerera sätt? 
    render(){
        return(
          <div>
            <p>Thanks for playing!</p>
            <a href=''>Reset Quiz</a>
          </div>
        )
    }
}

export default QuizEnd