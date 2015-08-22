var ProjectMeta = require('./models/project');
var path = require('path');
var Emailer = require('./emailer/emailer');
var mongoose = require('mongoose');


module.exports = function(app) {
  app.get('/api', function(req, res) {
      res.json({ message: 'Youve reached the API!'});
  });

  app.get('/api/contactus', function(req, res) {
//       Emailer.sendMail(function(error, greatSuccess) {
//         if (error) {
//           //console.log(error);
//         }
// 
//         res.json({ success: greatSuccess });
//       });
  });

  app.get('/api/projects', function(req, res) {
      ProjectMeta.find(function(err, test) {
        res.json(test);
      })
  });

  app.get('/api/projects/:id', function(req, res) {
      var projectId = req.params.id;
      console.log(projectId);
      ProjectMeta.find({"_id": mongoose.Types.ObjectId(projectId)}, function(err, data) {
        console.log(data);
        res.json(data);
      })
  });
  
  // app.post('/api/projects/add', function(req, res) {
  //   var request = req.body;
  //   request.createdDate = new Date();
  //   request.updatedDate = new Date();
  //   //console.log(request);
  //   var project = new ProjectMeta(request);
  //   //console.log(project);
  //   var message = "failed";
  //   
  //   project.save(function(err) {
  //     if (err) {
  //       console.log(err); 
  //     }
  //     
  //     message = "success";
  //     console.log(message);
  //     res.json(message);
  //   });    
  // });

  //catch all to handle angular routes
  app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
  });
};
