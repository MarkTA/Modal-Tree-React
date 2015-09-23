var React = require('react');
var Main = require('./components/main');

var options = {
  title: 'A',
  number: 1,
  tier:1,
  childData:[{
    title: 'AA',
    number: 51,
    tier:2,
    childData:[{
        title: 'AAA',
        number: 51,
        tier:3,
        childData:[]
    },{
        title: 'AAB',
        number: 51,
        tier:3,
        childData:[{
            title: 'AABA',
            number: 51,
            tier:4,
            childData:[]
        },{
            title: 'AABB',
            number: 51,
            tier:4,
            childData:[]
        }]
    }]
  },
  {
    title: 'AB',
    number: 45,
    tier:2,
    childData: [{
        title: 'ABA',
        number: 51,
        tier:3,
        childData:[]
    },{
        title: 'ABB',
        number: 51,
        tier:3,
        childData:[{
            title: 'ABBA',
            number: 51,
            tier:4,
            childData:[]
        },{
            title: 'ABBB',
            number: 51,
            tier:4,
            childData:[]
        },{
            title: 'ABBC',
            number: 51,
            tier:4,
            childData:[]
        }]
    }]
  }]


}


var element = React.createElement(Main, options);
React.render(element,  document.querySelector('.container'));
