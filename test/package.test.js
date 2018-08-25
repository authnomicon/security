/* global describe, it */

var expect = require('chai').expect;


describe('@authnomicon/security', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('security');
      
      expect(json.assembly.components).to.have.length(6);
      expect(json.assembly.components).to.include('authentication/oob/main');
      expect(json.assembly.components).to.include('authentication/otp/main');
      expect(json.assembly.components).to.include('authentication/otp/algorithms/hotp');
      expect(json.assembly.components).to.include('authentication/otp/algorithms/totp');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
