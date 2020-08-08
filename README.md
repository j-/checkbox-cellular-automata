# Cell Simulator

The aim is to demonstrate how you approach thinking about problems and translating them to code.

Create a repository to your own, spend your allocated time working on a solution and then submit it
back to us. Please include a README with installation and usage instructions.

Challenge: Cell Simulator
The &quot;game&quot; is a zero-player game, meaning that its evolution is determined by its initial state,
requiring no further input. One interacts with the Cell Simulator by creating an initial configuration
and observing how it evolves.

![extreme cell simulator](https://user-images.githubusercontent.com/291728/33158075-ec01ddde-d05a-11e7-99b8-35af2fed02e5.gif)

## Acceptance criteria

- At initial state, User should see an empty board.
- User can make Cells &quot;alive&quot;.
- User can make Cells &quot;dead&quot;.
- User can trigger &quot;next generation&quot;.
- User can trigger a &quot;reset&quot; to the initial state.

## Next generation

- When the next generation is running:
- A Cell with fewer than two live neighbours dies of under-population.
- A Cell with 2 or 3 live neighbours lives on to the next generation.
- A Cell with more than 3 live neighbours dies of overcrowding.
- An empty Cell with exactly 3 live neighbours &quot;comes to life&quot;.
- A Cell who &quot;comes to life&quot; outside the board should wrap at the other side of the board.
- Once the next generation is done, User can trigger &quot;next generation&quot; again.

Here an example of an initial state followed by 4 &quot;next generation&quot;:
![easy scenario](https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg)

## Requirements

- Use React and TypeScript.
- Please include some attempt at testing your code.
- While not mandatory, a meaningful git history will be looked upon favourably.
