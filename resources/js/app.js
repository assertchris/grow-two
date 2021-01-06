import React from 'react'
import { render } from 'react-dom'
import { Button } from '@indiefin/galaxy-button'

const App = () => (
    <div>
        <Button handleClick={() => console.log('hello world')}>hello world</Button>
    </div>
)

render(<App />, document.querySelector('.app'))
