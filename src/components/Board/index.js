import React from 'react';

import List from '../List';

import { loadLists } from '../../services/api';

import { Container } from './styles';

const list = loadLists();

export default function Board() {
  return (
    <Container>
      {list.map(list => <List key={list.title} data={list}/>)}
    </Container>
  );
}
