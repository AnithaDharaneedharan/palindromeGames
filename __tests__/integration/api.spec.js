const supertest = require('supertest');
const app = require('../../index.js');
const request = supertest(app);

describe('Post player details', () => {
  test('should post player details', async () => {
    let createResponse = await request.post('/api/submitEntry').send({
      name: 'test1',
      word: 'civic',
    });

    expect(createResponse.statusCode).toBe(200);

    createResponse = await request.post('/api/submitEntry').send({
      name: 'test2',
      word: 'peep',
    });
    createResponse = await request.post('/api/submitEntry').send({
      name: 'test3',
      word: 'pop',
    });
    createResponse = await request.post('/api/submitEntry').send({
      name: 'test4',
      word: 'Racecar',
    });
    createResponse = await request.post('/api/submitEntry').send({
      name: 'test5',
      word: 'madam',
    });

  
  });

  test('should get player details', async () => {
    let { body, statusCode } = await request.get('/api/getScores');

    expect(statusCode).toBe(200);
    expect(body).toEqual([
      { name: 'test4', points: 7, word: 'Racecar' },
      { name: 'test1', points: 5, word: 'civic' },
      { name: 'test5', points: 5, word: 'madam' },
      { name: 'test2', points: 4, word: 'peep' },
      { name: 'test3', points: 3, word: 'pop' },
    ]);
  })
  
});
