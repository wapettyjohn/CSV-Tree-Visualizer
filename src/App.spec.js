import fs from 'fs';
import path from 'path';

import App from './components/App.js';
import Form from './components/Form.js';

const smallCsv = fs.readFileSync(path.join(__dirname, '../small.csv'), 'utf8');
const bigCsv = fs.readFileSync(path.join(__dirname, '../big.csv'), 'utf8');

/* Testing small CSV */

test('Number of vertices in small CSV = 9', () => {
  expect(App.parseData(smallCsv)).toHaveLength(9);
});

const smallCsvVertices = App.parseData(smallCsv);
for (let i = 0; i < smallCsvVertices.length; i++) {
  const vertex = smallCsvVertices[i];
  const j = i + 1;

  test(`Vertex ${j} from small CSV has an id, color, shape, and children`,
    () => {
      expect(vertex).toMatchObject({
        id: expect.any(Number),
        color: expect.any(String),
        shape: expect.any(String),
        children: expect.any(Array),
      }
    );
  });
}

test(`Small CSV vertices has a root`, () => {
  expect(App.getRoot(smallCsvVertices)).toBeDefined();
});


/* Testing big CSV */

test('Number of vertices in big CSV = 81', () => {
  expect(bigCsvVertices).toHaveLength(81);
});

const bigCsvVertices = App.parseData(bigCsv);
for (let i = 0; i < bigCsvVertices.length; i++) {
  const vertex = bigCsvVertices[i];
  const j = i + 1;

  test(`Vertex ${j} from big CSV has an id, color, shape, and children`,
    () => {
      expect(vertex).toMatchObject({
        id: expect.any(Number),
        color: expect.any(String),
        shape: expect.any(String),
        children: expect.any(Array),
      }
    );
  });
}

test(`Big CSV vertices has a root`, () => {
  expect(App.getRoot(bigCsvVertices)).toBeDefined();
});
