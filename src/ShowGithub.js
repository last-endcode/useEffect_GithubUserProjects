import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

function ShowGithub() {
  const [user, setUser] = useState([]);

  // async await url
  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
    // check obj on url json
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className='underline'></div>
      <ul className='user'>
        {user.map((users) => {
          const { id, avatar_url, html_url, login } = users;
          return (
            <li key={id}>
              <img src={avatar_url} alt='' />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target='_blank'>
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowGithub;
