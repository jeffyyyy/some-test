module.exports = function(app) {
    var index = require('../controllers/controller');
    app.get('/api/chart', index.getChart);
    app.get('/api/projects', index.getProjects);
    app.get('/api/people', index.getPeople);
    app.get('*', index.index);
};
