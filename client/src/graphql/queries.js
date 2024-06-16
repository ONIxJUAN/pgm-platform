const { gql } = require("@apollo/client");

export const GET_ALL_PORTFOLIOS = gql`
  query portfolios {
    portfolios {
      title
      programmalijn
      periode
      vak
      description
      img {
        url
      }
      kernwoorden
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query GET_ALL_BLOGS {
    blogs {
      id
      title
      description
      html
    }
  }
`;

export const GET_ALL_TEAMMEMBERS = gql`
  query GET_ALL_TEAMMEMBERS {
    teams {
      name
      vak
      img {
        url
      }
    }
  }
`;
