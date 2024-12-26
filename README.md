# JavaScript Optimization JIT

### "JavaScript without Optimization (JIT) is like watching Netflix with 2G network speed 😂—you'll start the show, but don't expect to finish it anytime soon!"
---------------------------------
---------------------------------
# JavaScript is interpreted language which means it execute line by line, but in morden web browser is too fast so how javascript code execute that much fast, so the reason behind it the Optimization in Javascript (JIT). 


### Watch a performance video of Javascript with JIT Optimization and without JIT Optimization.
[Watch Here](https://youtu.be/hZat_RRo6DE?si=oIr6g3uOdD6OF-1p)


-----------------------------------

To run the performance.js file 

### With JavaScript JIT Optimization 

`node performance.js`

### Without JavaScript JIT Optimization

1. `node --jitless performance.js`

2. `node --no-opt performance.js`

### Output

<table>
<tr>
<th>Command</th>
<td>node performance.js</td>
<td>node --jitless performance.js</td>
<td>node --no-opt performance.js</td>
</tr>
<tr>
<th>Result</th>
<td>1770 ms</td>
<td>9264 ms</td>
<td>8758 ms</td>
</tr>
<table>

----------------------------------
--------------------------------

For more find the ref [JavaScript V8 JIT Official Website](https://v8.dev/blog/jitless)
