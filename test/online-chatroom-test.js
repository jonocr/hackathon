describe('Online-Chatroom', function() {
  var data;
  var numMessages;
  before(function(done) {
    $.getJSON("http://slack-server.elasticbeanstalk.com/messages").done(function(stuff){
        data = stuff;
        numMessages = data.length;
        done();
    });
  });
  it('should have correct number of .message elements', function() {
    expect(document.querySelector(".message")).to.not.equal(null);
    expect(document.querySelectorAll(".message").length).to.equal(numMessages);
  });
  it('should have a input element',function(){
    expect(document.querySelector("input")).to.not.equal(null);
  });
  it('should have a button element',function(){
    expect(document.querySelector("button")).to.not.equal(null);
  });

  it('should be able to post message',function(done){
    document.querySelector("input").value = "test message";
    document.querySelector("button").click();
    var newMessages;
    setTimeout(function(){$.getJSON("http://calendar-server.elasticbeanstalk.com/messages").done(function(stuff){
        newMessages = stuff.length;
        expect(newMessages).to.be.greaterThan(numMessages);
        done(); 
     });
    }, 1000);
  });

});
