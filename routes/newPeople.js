
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
      'projects': [
        { 'name': 'Waiting in Line',
          'id': 'project1'
        },
        { 'name': 'Needfinding',
          'id': 'project2'
        },
        { 'name': 'Prototyping',
          'id': 'project3'
        },
        { 'name': 'Heuristic Evaluation',
          'id': 'project4'
        },
        { 'name': 'Visualization',
          'id': 'project5'
        },
        { 'name': 'Social design',
          'id': 'project6'
        },
        { 'name': 'Gestural interaction',
          'id': 'project7'
        },
        { 'name': 'Design tools',
          'id': 'project8'
        }
      ]
    });
};
