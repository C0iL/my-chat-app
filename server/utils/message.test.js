var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'me';
    var text = 'lalar';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'me';
    var lat = 15;
    var lng = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, lat, lng);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});

  });
});
