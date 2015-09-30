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
      <div id="modalMaterial" className="transparent">
        <div id="MaterialHold">
          <button id="newMaterial">
            New Material
          </button>
          <Link to="/"  id="ModalClose">
            <span
              className="glyphicon glyphicon-remove"/>
          </Link>
          <br/>
          <div className="tableWrap">
            <table id="MaterialTable">
              <tbody id="MaterialTBody">
                <tr>
                  <th><div className="THdisplay">Material Name</div></th>
                  <th><div className="THdisplay">Unit Name</div></th>
                  <th><div className="THdisplay">Cost per Unit</div></th>
                </tr>
                <tr>
                  <td><span className="example">Coverstain primer</span></td>
                  <td><span className="example">1gallon</span></td>
                  <td><span className="example">$20.00</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>);
},


});
