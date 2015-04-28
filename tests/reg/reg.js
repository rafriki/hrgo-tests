

module.exports = {
  'init' : function (client){
    process.setMaxListeners(0);
    client
      .url('http://hrgo.co.uk/register')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.containsText('h1', 'Candidate Registration Form', 'We have reached the registration form page');
  },
  'eligible' : function (client){
    client
      .verify.cssClassPresent("input[name=eligible]", "ng-invalid")
      .click("input[name=eligible]")
      .verify.cssClassPresent("input[name=eligible]", "ng-valid")
      .verify.value("input[name=eligible]", "on");
  },
  'names' : function (client){
    client
      .verify.cssClassPresent("input[name=candidateTitle]", "ng-invalid")
      .click("input[value=MR]")
      .verify.cssClassPresent("input[name=candidateTitle]", "ng-valid")
      .verify.value("input[name=candidateTitle]", "MR")

      .verify.cssClassPresent("input[name=personalFirstName]", "ng-invalid")
      .setValue("input[name=personalFirstName]", "John")
      .verify.cssClassPresent("input[name=personalFirstName]", "ng-valid")
      .verify.value("input[name=personalFirstName]", "John")

      .verify.cssClassPresent("input[name=personalSurname]", "ng-invalid")
      .setValue("input[name=personalSurname]", "Parkinson")
      .verify.cssClassPresent("input[name=personalSurname]", "ng-valid")
      .verify.value("input[name=personalSurname]", "Parkinson");
  },
  'address' : function (client){
    client
      .verify.cssClassPresent("input[name=addressFirstLine]", "ng-invalid")
      .setValue("input[name=addressFirstLine]", "38 Castle Row")
      .verify.cssClassPresent("input[name=addressFirstLine]", "ng-valid")
      .verify.value("input[name=addressFirstLine]", "38 Castle Row")

      .verify.cssClassPresent("input[name=addressTown]", "ng-invalid")
      .setValue("input[name=addressTown]", "Canterbury")
      .verify.cssClassPresent("input[name=addressTown]", "ng-valid")
      .verify.value("input[name=addressTown]", "Canterbury")

      .verify.cssClassPresent("input[name=addressCounty]", "ng-invalid")
      .setValue("input[name=addressCounty]", "Kent")
      .verify.cssClassPresent("input[name=addressCounty]", "ng-valid")
      .verify.value("input[name=addressCounty]", "Kent")

      .verify.cssClassPresent("input[name=addressPostcode]", "ng-invalid")
      .setValue("input[name=addressPostcode]", "CT1 2QY")
      .verify.cssClassPresent("input[name=addressPostcode]", "ng-valid")
      .verify.value("input[name=addressPostcode]", "CT1 2QY");
  },
  'contact' : function (client){
    client
      .verify.cssClassPresent("input[name=contactMobileTelephone]", "ng-invalid")
      .setValue("input[name=contactMobileTelephone]", "07792598773")
      .verify.cssClassPresent("input[name=contactMobileTelephone]", "ng-valid")
      .verify.value("input[name=contactMobileTelephone]", "07792598773")

      .verify.cssClassPresent("input[name=contactEmailAddress]", "ng-invalid")
      .setValue("input[name=contactEmailAddress]", "johnparkinson142@gmail.com")
      .verify.cssClassPresent("input[name=contactEmailAddress]", "ng-valid")
      .verify.value("input[name=contactEmailAddress]", "johnparkinson142@gmail.com");
  },
  'desired work' : function (client){
    client
      .verify.cssClassPresent("input[name=startDate]", "ng-invalid")
      .setValue("input[name=startDate]", "2015-04-01")
      .verify.cssClassPresent("input[name=startDate]", "ng-valid")
      .verify.value("input[name=startDate]", "2015-04-01")

      .verify.cssClassPresent("input[name=desiredWorkTempPerm]", "ng-invalid")
      .click("input[name=desiredWorkTempPerm]")
      .verify.cssClassPresent("input[name=desiredWorkTempPerm]", "ng-valid")
      .verify.value("input[name=desiredWorkTempPerm]", "temp")

      .verify.cssClassPresent("input[name=desiredWorkFullPartTime]", "ng-invalid")
      .click("input[name=desiredWorkFullPartTime]")
      .verify.cssClassPresent("input[name=desiredWorkFullPartTime]", "ng-valid")
      .verify.value("input[name=desiredWorkFullPartTime]", "full");
  },
  'transport' : function (client){
    client
      .verify.cssClassPresent("input[name=transportDrivinglicence]", "ng-invalid")
      .click("input[name=transportDrivinglicence]")
      .verify.cssClassPresent("input[name=transportDrivinglicence]", "ng-valid")
      .verify.value("input[name=transportDrivinglicence]", "y")

      .verify.cssClassPresent("input[name=transportOwnTransport]", "ng-invalid")
      .click("input[name=transportOwnTransport]")
      .verify.cssClassPresent("input[name=transportOwnTransport]", "ng-valid")
      .verify.value("input[name=transportOwnTransport]", "y");
  },
  'emergency contact' : function (client){
    client
      .verify.cssClassPresent("input[name=emergencyContactName]", "ng-invalid")
      .setValue("input[name=emergencyContactName]", "Jack Parkinson")
      .verify.cssClassPresent("input[name=emergencyContactName]", "ng-valid")
      .verify.value("input[name=emergencyContactName]", "Jack Parkinson")

      .verify.cssClassPresent("input[name=emergencyContactNumber]", "ng-invalid")
      .setValue("input[name=emergencyContactNumber]", "01233722460")
      .verify.cssClassPresent("input[name=emergencyContactNumber]", "ng-valid")
      .verify.value("input[name=emergencyContactNumber]", "01233722460");
  },
  'income' : function (client){
    client
      .verify.cssClassPresent("input[name=salaryMinimum]", "ng-invalid")
      .setValue("input[name=salaryMinimum]", "10")
      .verify.cssClassPresent("input[name=salaryMinimum]", "ng-valid")
      .verify.value("input[name=salaryMinimum]", "10")

      .verify.cssClassPresent("input[name=candidateSalaryMode]", "ng-invalid")
      .click("input[name=candidateSalaryMode]")
      .verify.cssClassPresent("input[name=candidateSalaryMode]", "ng-valid")
      .verify.value("input[name=candidateSalaryMode]", "h");
  },
  'cv' : function (client){
    client
      .verify.cssClassPresent("input[name=cvUpload]", "ng-invalid")
      .setValue("input[name=cvUpload]", "/Users/John/Desktop/hrgo/cv.docx")
      .verify.cssClassPresent("input[name=cvUpload]", "ng-valid");
  },
  'terms' : function (client){
    client
      .verify.cssClassPresent("input[name=terms]", "ng-invalid")
      .click("input[name=terms]")
      .verify.cssClassPresent("input[name=terms]", "ng-valid")
      .verify.value("input[name=terms]", "on");
  },
   'submit' : function (client){
    client
      .click("input[type=submit]")
      .waitForElementPresent('div.sweet-alert', 500, 'response recieved')
      .verify.containsText('h2', 'Thank you!', 'Form successful')
      .verify.visible("div .sweet-alert .success")
      .click("button.confirm")
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.urlEquals("http://www.hrgo.co.uk/", 'we are back home');
  },
  'end': function (client) {
    client
      .end();
  }
};
