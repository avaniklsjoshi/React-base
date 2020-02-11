import React from 'react';
import { connect } from 'react-redux';
import { getStarShip } from '../../actions/user';

export function starShips(props: any) {
  const { starShips, getStarShip } = props;

  const StarShips = () => {
    getStarShip();
  };

  return (
    <div>
      <h1>Star Ships</h1>
      <button onClick={StarShips}>Get Starships</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Length</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {starShips && starShips.length
            ? starShips.map((key: any) => {
                return (
                  <tr key={key.name}>
                    <td>{key.name}</td>
                    <td>{key.model}</td>
                    <td>{key.manufacturer}</td>
                    <td>{key.length}</td>
                    <td>{key.created}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  starShips: state.user.starShips,
});

const mapDispatchToProps = (dispatch: any) => ({
  getStarShip: () => dispatch(getStarShip()),
});

export default connect(mapStateToProps, mapDispatchToProps)(starShips);
