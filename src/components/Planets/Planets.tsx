import React from 'react';
import { connect } from 'react-redux';

const Planets = (props: any) => {
  const { planets } = props;

  return planets.length ? (
    <div style={{ background: '#84c7af57' }}>
      HEllo planets
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>rotation Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {planets.length &&
            planets.map((key: any) => {
              return (
                <tr key={key.name}>
                  <td>{key.name}</td>
                  <td>{key.rotation_period}</td>
                  <td>{key.diameter}</td>
                  <td>{key.climate}</td>
                  <td>{key.terrain}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  planets: state.user.planets,
});

export default connect(mapStateToProps, null)(Planets);
