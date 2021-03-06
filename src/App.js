import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions , setQuestions] = useState(data);
  console.log(questions)
  return (
    <main>
      <div className='container'> 
        <h3>questions and answers about login</h3>
        <section>
            {questions.map((item) => {
              return(
                <SingleQuestion key={item.id } {...item} />
              )
            })}
        </section>
      </div>
    </main>
  )

}

export default App;
