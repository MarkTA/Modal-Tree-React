var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <div className="block big">
            <h2>
              <span
                className="spanNumber badge"
                style={{fontSize: 20, marginBottom: 10}} />
              <span className="spanTitle">
                {this.props.params.title}
              </span>
            </h2>
            <h3 className="time">
              <span className="time-employee" />
              <span className="time-number" />
              <span className="time-option" />
              <span className="time-each" />
            </h3>
            <ul className="list" />
          </div>
          <div id="overlayer">
            <Link to="/">
              <span id="BranchClose"
                className="glyphicon glyphicon-remove ModalEditClose"/>
            </Link>
            <table id="modalEdit">
              <tbody>
                <tr>
                  <td className="toggleButton">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-pencil">
                      </span> Title
                    </div>
                  </td>
                  <td className="hideThis">
                    <input
                      id="editTitle"
                      type="text"
                      defaultValue="WINDOWS" />
                    <button className="okay" onClick="editTitle()">
                      <span className="glyphicon glyphicon-ok">
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-align-justify">
                      </span> Tally
                    </div>
                  </td>
                  <td className="hideThis">
                    <input
                      id="Tally"
                      type="number"
                      defaultValue={1} />
                    <button onClick="addTally()">
                      <span className="glyphicon glyphicon-plus" />
                    </button>
                    <button onClick="minusTally()">
                      <span className="glyphicon glyphicon-minus" />
                    </button>
                    <button className="okay">
                      <span className="glyphicon glyphicon-ok">
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-time">
                      </span> Time
                    </div>
                  </td>
                  <td className="hideThis">
                    <select id="employeeOption">
                      <option value>employee</option>
                      <option value="Mark">Mark</option>
                      <option value="Eric">Eric</option>
                      <option value="Joel">Joel</option>
                    </select>
                    <input
                      id="timeNumber"
                      type="number"
                      defaultValue />
                    <select id="timeOption">
                      <option value="mins">mins</option>
                      <option value="hrs">hrs</option>
                      <option value="days">days</option>
                    </select>
                    <span>for</span>
                    <select id="timeEach">
                      <option value="each">each</option>
                      <option value="all">all</option>
                    </select>
                    <button className="okay" onclick="editTime()">
                      <span className="glyphicon glyphicon-plus">
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-list">
                      </span> List
                    </div>
                  </td>
                  <td className="hideThis">
                    <input id="lists" type="text" />
                    <select id="materials" style={{display: 'none'}}>
                      <option value>Materials</option>
                      <option value="CoverStain">Coverstain</option>
                      <option value="PPG">PPG</option>
                      <option value="Caulk">Caulk</option>
                      <option value="Tape">Tape</option>
                    </select>
                    <button onClick="addList()">next</button>
                    <button
                      id="materialButton"
                      onClick="selectMaterial()">
                      add material
                    </button>
                    <div id="listEditor" className>
                      <ul id="ULedit" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-leaf">
                      </span> Branch
                    </div>
                  </td>
                  <td className="hideThis">
                    <input
                      className="inputMedium"
                      id="newBranch"
                      type="text"
                      name="title"
                      autocomplete="off" />
                    from<select id="branchFrom" name="branchFrom">
                      <option value="House-Painting">House Painting</option>
                    </select>
                    <button
                      className="okay gotIt"
                      onClick="brancher()">
                      <span className="glyphicon glyphicon-ok">
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton gotIt">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-ok">
                      </span> OK
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="toggleButton" onClick="trash()">
                    <div className="toggle">
                      <span className="glyphicon glyphicon-trash">
                      </span> TRASH
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
