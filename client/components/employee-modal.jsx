var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

    getInitialState: function() {
      return {
      };
    },
  render: function() {

    return (
      <div id="modalWages" className="transparent ">
        <div id="wageHold">
          <button id="newEmployee">
            New Employee
          </button>
          <Link to="/">
            <span id="ModalClose"
              className="glyphicon glyphicon-remove"/>
          </Link>
          <br/>
          <div className="tableWrap">
            <table id="wageTable">
              <tbody id="wageTBody">
                <tr>
                  <th><div className="THdisplay">EMPLOYEE</div></th>
                  <th><div className="THdisplay">PER HOUR</div></th>
                  <th><div className="THdisplay">PER DAY</div></th>
                </tr>
                <tr>
                  <td><span className="example">Eric</span></td>
                  <td><span className="example">$19.00</span></td>
                  <td><span className="example">$150.00</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>);
},


});
