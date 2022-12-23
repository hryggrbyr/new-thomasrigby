/* eslint-disable func-names */
const DateDiff = require('timediff');
const differ = (from) => {
  const diff = new DateDiff(new Date(from), new Date());
  return diff.years;
};

exports.handler = async function (event, context) {
  const me = {
    name: {
      honorific: 'Mr',
      first: 'Thomas',
      middle: null,
      last: 'Rigby',
      knownAs: 'Thom',
      pronouns: {
        subject: 'he',
        object: 'him',
        possessive: 'his',
      },
      username: 'hryggrbyr',
      display: 'Thomas Rigby',
    },
    location: 'Manchester, UK',
    bio: "When I'm not building things for the internet, I take photos of stuff.",
    avatar: {
      small: 'https://en.gravatar.com/avatar/f90433d035268f6757efd3bd77e9227a?size=80',
      medium: 'https://en.gravatar.com/avatar/f90433d035268f6757efd3bd77e9227a?size=400',
      large: 'https://en.gravatar.com/avatar/f90433d035268f6757efd3bd77e9227a?size=900',
    },
  };

  me.profile = {
    // codepen: { name: 'Codepen', url: `https://codepen.io/${me.name.username}` },
    devto: { name: 'Dev.to', url: `https://dev.to/${me.name.username}` },
    // instagram: { name: 'Instagram', url: `https://www.instagram.com/${me.name.username}/` },
    goodreads: { name: 'Goodreads', url: `https://www.goodreads.com/${me.name.username}/` },
    lastfm: { name: 'last.fm', url: `https://last.fm/user/${me.name.username}/` },
    linkedin: { name: 'LinkedIn', url: `https://www.linkedin.com/in/${me.name.username}/` },
    mastodon: { name: 'Mastodon', url: `https://mastodon.org.uk/@${me.name.username}` },
    tumblr: { name: 'Tumblr', url: `https://tumblr.com/${me.name.username}` },
    // twitter: { name: 'Twitter', url: `https://twitter.com/${me.name.username}` },
    // wakatime: { name: 'Wakatime', url: `https://wakatime.com/@${me.name.username}` },
  }

  me.dateOfBirth = new Date('1979-01-20');
  me.age = differ(me.dateOfBirth);

  me.startDate = new Date('2012-02-02');
  me.startLength = differ(me.startDate);

  const { path } = event;
  const base = '/.netlify/functions/me';
  const param = path.replace(base, '').split('/').filter(Boolean)[0];

  const data = param ? me[param] : me;

  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
    headers: {
      'access-control-allow-origin': '*',
    },
  };
};
