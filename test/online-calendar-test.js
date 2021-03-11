describe('Online-Calendar', function() {
  before(function(done) {
    setTimeout(function(){done();}, 1000);
  });

  it('should have right amount of .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.greaterThan(112);
  }); 
  it('should have only confirmed .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.lessThan(123);
  });
  it('should have right amount of .day elements',function(){
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.be.greaterThan(16);
  });

 });
