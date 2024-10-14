// SAMPLE DATA //
const data = [
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
  
  describe('todos', function(){
    it('should be an array', function(){
      assert.equal(Array.isArray(todos), true);
    });
    it('array should have 3 values', function(){
      assert.equal(todos.length, 3);
    });
    it('each value should be a string', function(){
      assert.equal(typeof todos[0], 'string');
      assert.equal(typeof todos[1], 'string');
      assert.equal(typeof todos[2], 'string');
    });
  });
  
  describe('#getTaskByLength', function(){
    let data = ['take out garbage', 'clean', 'do laundry'];
    it('should return a string', function(){
      let func = getTaskByLength;
      assert.equal(typeof func(data, 'shortest'), 'string');
    });
    it('should return the element with the shortest length based on targetLength', function(){
      let func = getTaskByLength;
      assert.equal(func(data, 'shortest'), 'clean');
    });
    it('should the element with the longest length based on targetLength', function(){
      let func = getTaskByLength;
      assert.equal(func(data, 'longest'), 'take out garbage');
    });
  });
  
  describe('#awardPrize', function(){
    let sandbox = sinon.createSandbox();
  
    beforeEach(function () {
        sandbox.data = [
          {
            task: 'Feed cat',
            completed: false,
            assignedTo: ['Stan'],
            recurs: 'Weekly',
            tags: ['quick', 'physical']
          },
          {
            task: 'Get groceries',
            completed: true,
            assignedTo: ['Alex'],
            recurs: 'Weekly',
            tags: ['travel', 'long', 'physical']
          },
          {
            task: 'Order pet medication',
            completed: false,
            assignedTo: ['Stephanie'],
            recurs: 'Monthly',
            tags: ['quick', 'internet']
          },
          {
            task: 'Pay rent',
            completed: true,
            assignedTo: ['Alex', 'Stephanie', 'Stan', 'Kyle'],
            recurs: 'Monthly',
            tags: ['quick', 'internet']
          },
          {
            task: 'Do dishes',
            completed: false,
            assignedTo: ['Kyle'],
            recurs: 'Weekly',
            tags: ['physical', 'long']
          },
      ];
    });
  
    afterEach(function () {
        sandbox.restore();
    });
    it('should correctly update objects in array', function(){
      let func = awardPrize;
      func(sandbox.data);
      assert.equal(sandbox.data[0].prizeMoney, 10);
      assert.equal(sandbox.data[1].prizeMoney, 0);
      assert.equal(sandbox.data[2].prizeMoney, 10);
      assert.equal(sandbox.data[3].prizeMoney, 0);
      assert.equal(sandbox.data[4].prizeMoney, 10);
    });
  });
  
  describe('#printTaskInfo', function(){
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    let data = {
      task: 'Get groceries',
      completed: true,
      assignedTo: ['Alex'],
      recurs: 'Weekly',
      tags: ['travel', 'long']
    };
    let input1 = [ ['task', 'name of task'], ['recurs', 'frequency of task']];
    let input2 = [ ['task', 'name of task'], ['tags', 'description of task']];

    it('should print the correct info based on the input propAndInfo', function(){
      printTaskInfo(data, input1);
      console.log.firstCall.calledWith("Get groceries (name of task)");
      console.log.secondCall.calledWith("Weekly (frequency of task)");
    }); 
    it('should print the correct info when the value at the key is an array', function(){
      printTaskInfo(data, input2);
      console.log.firstCall.calledWith("Get groceries (name of task)").should.be.true;
      console.log.secondCall.calledWith("travel (description of task)").should.be.true;
      console.log.thirdCall.calledWith("long (description of task)").should.be.true;
    }); 
  });
  
  describe('#getTaskStatus', function(){
    it('should return a boolean if the task is found', function(){
      assert.equal(typeof getTaskStatus(tasks, 'Get groceries'), "boolean");
    });
    it('should return the correct boolean if the task is found', function(){
      assert.equal(getTaskStatus(tasks, 'Get groceries'), true);
      assert.equal(getTaskStatus(tasks, 'Feed cat'), false);
    });
    it('should return an output message is no task is found', function(){
      assert.equal(getTaskStatus(tasks, 'Dust'), 'no task found matching that description');
    });
  });
  
  describe('#createString', function(){
    let sandbox = sinon.createSandbox();
  
    beforeEach(function () {
        sandbox.spy(Array.prototype, "reduce");
    });
  
    afterEach(function () {
        sandbox.restore();
    });
    it('should return a string', function(){
      assert.equal(typeof createString(tasks), 'string');
    });
    it('should the correct string', function(){
      assert.equal(createString(tasks), 'eters');
    });
    it('should the native reduce method', function(){
      createString(tasks);
      assert(Array.prototype.reduce.calledOnce, true);
    });
  });

  describe('#filterByTag', function(){
    let sandbox = sinon.createSandbox();
    beforeEach(function () {
        sandbox.spy(Array.prototype, "filter");
    });
  
    afterEach(function () {
        sandbox.restore();
    });
    it('should return an array', function(){
      assert.equal(Array.isArray(filterByTag(tasks, 'quick')), true);
    });
    it('should return the correct array based on the input tag', function(){
      assert.deepEqual(filterByTag(tasks, 'quick'), [
        {
          task: 'Feed cat',
          completed: false,
          assignedTo: ['Stan'],
          recurs: 'Weekly',
          tags: ['quick', 'physical'],
          priority: 1
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
      ]);
    });
    it('should the native filter method', function(){
      filterByTag(tasks, 'quick')
      assert(Array.prototype.filter.calledOnce, true);
    });
  });