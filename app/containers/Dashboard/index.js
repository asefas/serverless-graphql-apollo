import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Content from '../../components/Content';
import Block from '../../components/Block';
import styles from './styles.css';


const Dashboard = (props) => (
  <Content compact className={styles.root}>
    <Block>
      { props.data.loading ? '... ' : `Welcome ${props.data.viewer.name}!` }
    </Block>
    <Block>
      { props.data.loading ? '... ' : `You have fund ${props.data.funds[0].name} with ticker ${props.data.funds[0].ticker}` }
    </Block>
  </Content>
);

export default graphql(
  gql`
    {
      viewer {
        name
      },
      funds {
        name, ticker
      }
    }
  `,
)(Dashboard);
