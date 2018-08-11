const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

exports.db = db;

exports.addToken = tokenInfo => db
  .get('authSessions')
  .push(tokenInfo)
  .write();

exports.getPositions = () => db.get('positions').value();

exports.getSkillLevels = () => db.get('skillLevels').value();

exports.getSkills = () => db.get('skills').value();

exports.getLocations = () => db.get('locations').value();

exports.getEmployees = () => db.get('employees').value();

exports.getEmployee = id => db
  .get('employees')
  .find({ id })
  .value();

exports.getEmployeeByEmail = id => db
  .get('employees')
  .find({ email })
  .value();

exports.addEmployee = employee => db
  .get('employees')
  .push(employee)
  .write();

exports.changeEmployee = employee => db
  .get('employees')
  .find({ id: employee.id })
  .assign(employee)
  .write();

exports.removeEmployee = id => db
  .get('employees')
  .remove({ id })
  .write();

exports.getProjects = () => db.get('projects').value();

exports.getProject = id => db
  .get('projects')
  .find({ id })
  .value();

exports.changeProject = project => db
  .get('projects')
  .find({ id: project.id })
  .assign(project)
  .write();


exports.addProject = project => db
  .get('projects')
  .post(project)
  .write();

exports.removeProject = id => db
  .get('projects')
  .remove({ id })
  .write();

exports.getProjectTasks = projectId => db
  .get('tasks')
  .filter({ projectId })
  .value();

exports.getProjectEmployees = employeesIds => db
  .get('employees')
  .filter(employee => employeesIds.includes(employee.id))
  .value();

exports.getEmployeeTasks = employeeId => db
  .get('tasks')
  .filter({ employeeId })
  .value();

exports.changeTask = task => db
  .get('tasks')
  .find({ id: task.id })
  .assign(task)
  .write();

exports.getTask = id => db
  .get('tasks')
  .find({ id })
  .value();

exports.addTask = task => db
  .get('tasks')
  .post(task)
  .write();

exports.removeTask = id => db
  .get('tasks')
  .remove({ id })
  .write();

exports.getEmployeeProjects = employeeId => db
  .get('projects')
  .filter(project => project.employees.includes(employeeId))
  .value();

exports.getPositionById = id => db
  .get('positions')
  .find({ id })
  .value();

exports.getLocationById = id => db
  .get('locations')
  .find({ id })
  .value();
