/*
Welcome to 'Dont Mind if I Todo', the premier 'todo' organizing appication 
for communal living situations. 
*/

// SAMPLE DATA //
const tasks = [
    {
      task: 'Feed cat',
      completed: false,
      assignedTo: ['Stan'],
      recurs: 'Weekly',
      tags: ['quick', 'physical'],
      priority: 1
    },
    {
      task: 'Get groceries',
      completed: true,
      assignedTo: ['Alex'],
      recurs: 'Weekly',
      tags: ['travel', 'long', 'physical'],
      priority: 2
    },
    {
      task: 'Order pet medication',
      completed: false,
      assignedTo: ['Stephanie'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 3
    },
    {
      task: 'Pay rent',
      completed: true,
      assignedTo: ['Alex', 'Stephanie', 'Stan', 'Kyle'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 4
    },
    {
      task: 'Do dishes',
      completed: false,
      assignedTo: ['Kyle'],
      recurs: 'Weekly',
      tags: ['physical', 'long'],
      priority: 5
    },
  ];
  
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #1 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let todos = [];
  todos.push('laundry');
  todos.push('cook dinner');
  todos.push('buy dog food')
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #2 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let getTaskByLength = function(array, targetLength){

    return array.reduce(function(acc, current) {
          if (targetLength === 'longest') {
            
           if (acc.length > current.length) {
             return acc
           } else {
             return current
           }
        }
       if (targetLength === 'shortest') {
         
           if (acc.length < current.length) {
             return acc
           } else {
             return current
           }
       }
       
         })
       
     };
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #3 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let awardPrize = function(array){
    
    for (var i = 0; i < array.length; i++) {
      if(i % 2 === 0) {
        array[i]['prizeMoney'] = 10
      } else {
        array[i]['prizeMoney'] = 0
      }
    }
    return array
  
    
  };
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #4 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let printTaskInfo = function(task, propAndInfo) {
    return propAndInfo.forEach(function ([key, value])  { 
      let taskArr = Object.entries(task)
      if (typeof task['key'] === 'string') {
        console.log(`${task['key']} (${value})`)
      }
      if (typeof value === 'object') {
        for (var i = 0; i < value.length; i++) {
          console.log(`${task['key']} (${value[i]})`)
        
        
      }
    }
    }) 
    
    
  };

  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #5 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let getTaskStatus = function(array, taskName){
    if (array.length === 0) 
      return `no task found matching that description`
    
    if (array[0].task === taskName) {
      return array[0].completed
    }
    else {
      return getTaskStatus(array.slice(1), taskName)
    }
    
  };

  
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #6 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let createString = function(array){
    return array.reduce(function(acc, curr) {
      return acc + curr['task'].charAt(curr.priority)
    }, '')
    
  };

  ///////////////////////////////////////////////////////////////
  // PROBLEM #7 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let filterByTag = function(array, tag){
    return array.filter(function(obj) {
      if (obj.tags.includes(tag)) {
        return obj
      }
    })
    
  };