import React from 'react';
import { connect } from 'react-redux';

const StarHeroes = (props: any) => {
  const { heroes } = props;

  return heroes.length ? (
    <div style={{ background: '#84c7af57' }}>
      HEllo HEroes
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Height</th>
            <th>Eye Color</th>
            <th>Hair Color</th>
          </tr>
        </thead>
        <tbody>
          {heroes.length &&
            heroes.map((key: any) => {
              return (
                <tr key={key.name}>
                  <td>{key.name}</td>
                  <td>{key.mass}</td>
                  <td>{key.height}</td>
                  <td>{key.eye_color}</td>
                  <td>{key.hair_color}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  heroes: state.user.heroes,
});

export default connect(mapStateToProps, null)(StarHeroes);
