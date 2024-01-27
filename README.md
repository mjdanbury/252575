# 75 25 25

## Or How A Drawing Prompt Led Me Down A Statistical Physics Rabbit Hole

On Saturday, I awoke to the following prompt for my Data Studio class:

> Visualize the numbers 75, 25, 25 in three different ways. The only shapes you're allowed to use are squares.

Great! I thought, flipping open my grid paper notebook. 25 is a square number, so lets start by drawing some squares on the grid with area 25. For the second approach, I decided to draw out the arabic numerals 75, 25, 25 in a blocky font. Lastly, I drew three more pairs of squares, two overlapping 25% and one pair overlapping 75%.

I could have stopped here but felt like using the assignment as an opportunity to do some creative coding. I spun up a [GPT terminal](https://chat.openai.com/share/7c492dac-2db0-4445-aa13-0471c6452b99) and asked for some code to generate a non-intersecting random walk of fixed length, and plot the results in a canvas element.

I imposed the non-intersecting condition so that the result would be a little tangly of 25 squares—just as the prompt specified. I added a few aesthetic tweaks as well as a button for users to click to regenerate random walks.

Everything seemed to be working fine but something was off: occasionally, the browser would freeze and crash when trying to regenerate a random walk. After inspecting the code, I realized that the non-intersecting condtion mean that it was possible for my walk to get stuck, and the code to fall into an infinite loop.

I pointed this out to GPT and it rewrote the code but to no avail. I went to Google with this mystery and found myself on the wikipedia page for [Self Avoiding Walks](https://en.wikipedia.org/wiki/Self-avoiding_walk).

As it turns out, self-avoiding walks are an area of active research in computational and statistical physics. They are used to model things that loop and knot like polymers or plant roots. The number of how many walks of a given length for a given lattice is an open question in mathematics.

Also, the wimpy algorithm that GPT cooked up for me is woefuly insufficient. The standard approach in the research literature is called a "pivot algorithm" and people still publish papers about making it faster under certain conditions.

Since there is no off the shelf implementation and the January sun was already getting low in the sky, I decided to shelf this project till another day. In the meatime you can play around with it and see how many valid walks you can generate before your luck runs out.

For more information, see the hilariously titled explainer ['How To Avoid Yourself'](http://bit-player.org/wp-content/extras/bph-publications/AmSci-1998-07-Hayes-self-avoidance.pdf).
