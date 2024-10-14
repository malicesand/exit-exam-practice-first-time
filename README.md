### Exit Exam Practice For First Time Students

  1. Create a variable called `todos` and assign it an empty array. Use the push method to add 3 strings to the array. Each string should represent a 'todo' (some kind of task you need to complete).
  2. Create a function called `getTaskByLength` that takes in two parameters - `array`, `targetLength`. `array` represents an array of task string (['take out garbage', 'clean', 'do laundry']); `targetLength` will be a string, either 'longest' or 'shortest'. This function should iterate through the input array. If `targetLength` is 'shortest', the function should return the task with the shortest length; if  `targetLength` is 'longest', the function should return the task with the longest length.
     * example: getTaskByLength(['take out garbage', 'clean', 'do laundry'], 'shortest') => 'clean'
     * example: getTaskByLength(['take out garbage', 'clean', 'do laundry'], 'longest') => 'take out garbage'
  3. The CEO of 'Don't Mind if I Todo' wants to award prize money to the individuals assigned to EVERY OTHER TASK in our tasks array. Create a function called `awardPrize` that takes in one parameter - `array` - which represents an array of of task objects. This function should iterate through every item of the input array and add a key of `prizeMoney` to each object. If the index of the current object is even, the value at the `prizeMoney` key should be 10; if the index of the current object is odd, the value at the `prizeMoney` key should be 0. The function should return the input array after updating it.
  4. We need a method to output task info in a very specific way. Create a function called `printTaskInfo` that takes in two parameters - `task`, `propAndInfo`; `task` represents a task object (see the task array above for examples); `propAndInfo` represents an array of arrays like this -> [ ['task', 'name of task'], ['assignedTo', 'individual assigned'] ]; Each array in `propAndInfo` contains a string representing a key in the task object and a string describing what the key stands for. This function should print the value at each key located in the arrays inside `propAndInfo` and it should add the string describing the key in parentheses.
     * example: printTaskInfo({
    task: 'Feed cat',
    completed: false,
    assignedTo: ['Stan'],
    recurs: 'Weekly',
    tags: ['quick', 'physical']
  }, [ ['task', 'name of task'], ['tags', 'description of task']]); => LOGS
  Feed Cat (name of task)
  quick (description of task)
  physical (description of task)
  5. Create a function called `getTaskStatus` that takes in two parameters - `array` and `taskName`. `array` represents an array of task objects; `taskName` represents a string of the task name (ex. 'Feed cat'). This function should **use recursion** to iterate through the input array and search for the task object whose task property matches the input taskName. If a match is found, the function should return the value at the key `completed` for that object. If no match is found, the function should return 'no task found matching that description'.
  6. Create a function called `createString` that takes in one parameter - `array` - which represents an array of task objects. This function should use the native reduce method to grab a letter from the value at each object's task key and add it to an output string. You should grab the letter at the index matching the current object's priority value. (For example, if the current object's 'priority' key has a value of 1, you should grab the letter at the 1 index of the task property); Assume the priority value will always be a valid index.
     * example: createString(tasks) => 'eters'
  7. Create a function called filterByTag that takes in two parameters - `array` and `tag`; `array` represents an array of task objects; `tag` represents a string of a tag. This function should use the native filter method to return a new array of only the task objects that include the input tag.