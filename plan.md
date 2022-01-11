## MVP

We want an app that displays a simple-random mathematical expression, and allows users to input an answer. If the answer is right, a point should be awarded and it should display a new question, if wrong no points should be awarded and the previous questions should still be displayed.

### Bonus 1

Display more complex expressions

### Bonus 2

Implement a timer, that runs out after a certain amount of time and re-starts the game.

### Bonus 3

Have images awarded as points, so the app is displaying a funny image(fetching from API) for each correct answer (bonus points if images are floating)

## COMPONENTS TREE FOR MVP

### APP

- state -> question
- state -> value of input field

#### COUNTER

- state -> count
- behaviour -> display count

#### MATHEMATICAL EXPRESSION

- props -> question
- behaviour -> display the question

#### INPUT FIELD

- props -> input
- behaviour -> submit the answer and compare
