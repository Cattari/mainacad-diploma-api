const uuid = require('uuid/v1')
const {
  getEmployeeTasks,
  getProjectTasks,
  changeTask,
  getTask,
  addTask,
  removeTask
} = require('../model.js');

module.exports = app => {
  app.get('/employees/:id/tasks', (req, res) => {
    const { id } = req.params;

    res.status(200).send(getEmployeeTasks(id));
  });

  app.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;

    res.status(200).send(getProjectTasks(id));
  });

  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { body: task } = req;

    changeTask({ ...task, id });
    res.status(200).send(getTask(id));
  });

  app.post('/tasks', (req, res) => {
    const { body: task } = req;
    const id = uuid()

    addTask({ ...task, id });
    res.status(200).send(getTask(id));
  });

  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    removeTask(id);
    res.status(200).send({ status: 'success'});
  });
}
