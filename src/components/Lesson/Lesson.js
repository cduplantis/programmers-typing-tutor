import React, { PropTypes } from 'react'
// import { calculateAccuracy, calculateCompletedPercent } from 'utilities'

import Header from 'components/Header'
import Example from 'components/Example'
import Editor from 'components/Editor'
import Exercise from 'components/Exercise'
import Button from 'components/Button'

const Lesson = (props) => {
  const {
    code,
    training,
    lesson,
    lessonResult
  } = props

  return (
    <div className='Trainer'>
      <div className='inner'>
        <Header {...lessonResult} completed={0} />
        <section className='editors'>
          {lesson.code.startsWith(code) && (
            <Example value={lesson.code} mode={training.mode} />
          )}
          <Editor mode={training.mode} />
          <Exercise exercise={lesson.text} />
        </section>
        <br />
        <Button.Group wide>
          <Button to='/'>Go to welcome page</Button>
          <Button onClick={() => this.props.fetchTraining(training.slug)} className='ui button'>Restart training</Button>
        </Button.Group>
      </div>
    </div>
  )
}

Lesson.propTypes = {
  code: PropTypes.string.isRequired,
  training: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
  lessonResult: PropTypes.object.isRequired
}

export default Lesson
