//Testy Cypress dla interfejsu API https://httpbin.org/#/

// Test 1.
it('Wysyła żądanie GET', () => {
  cy.request('GET', 'https://httpbin.org/get').then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Test 2.
it('Wysyła żądanie POST', () => {
  cy.request('POST', 'https://httpbin.org/post', {
    foo: 'bar'
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Test 3.
it('Wysyła losowe parametry zapytania', () => {
  const randomParam1 = Math.random().toString(36).substring(7);
  const randomParam2 = Math.random().toString(36).substring(7);
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/get',
    qs: {
      [randomParam1]: randomParam2
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.args[randomParam1]).to.eq(randomParam2);
  });
});

// Test 4.
it('Sprawdza treść odpowiedzi dla nagłówka', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'User-Agent': 'Cypress'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.headers['User-Agent']).to.eq('Cypress');
  });
});

// Test 5.
it('Wysyła niestandardowy nagłówek', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/get',
    headers: {
      'X-Custom-Header': 'foobar'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.headers['X-Custom-Header']).to.eq('foobar');
  });
});


// Test 6.
it('Sprawdza czas trwania wniosku', () => {
  cy.request('GET', 'https://httpbin.org/get').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.duration).to.be.lessThan(500);
  });
});

// Test 7.
it('Wysyła żądanie PUT', () => {
  cy.request({
    method: 'PUT',
    url: 'https://httpbin.org/put',
    body: {
      foo: 'bar'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Test 8.
it('Wysyła żądanie DELETE', () => {
  cy.request('DELETE', 'https://httpbin.org/delete').then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Test 9.
it('Sprawdza treść odpowiedzi dla adresu IP', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/ip'
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.origin).to.not.be.empty;
  });
});


// Test 10.
it('Koduje parametry URL', () => {
  const randomParam1 = Math.random().toString(36).substring(7);
  const randomParam2 = Math.random().toString(36).substring(7);
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/get',
    qs: {
      [encodeURIComponent(randomParam1)]: encodeURIComponent(randomParam2)
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.args[randomParam1]).to.eq(randomParam2);
  });
});

// Test 11.
it('Wysyła żądanie JSON', () => {
  cy.request({
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: {
      foo: 'bar',
      baz: 123
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.json.foo).to.eq('bar');
    expect(response.body.json.baz).to.eq(123);
  });
});
