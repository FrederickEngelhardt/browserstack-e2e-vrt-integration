var webdriver = require('selenium-webdriver')
const fs = require('fs')

var userName = 'frederickengelha1'
var accessKey = 'y828BfMmbSpQjWgFTJyq'
var browserstackURL =
  'https://' + userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub'

// Input capabilities
var capabilities = {
  os: 'Windows',
  os_version: '10',
  browserName: 'IE',
  browser_version: '11',

  name: "frederickengelha1's First Test",
}

var driver = new webdriver.Builder()
  .usingServer(browserstackURL)
  .withCapabilities(capabilities)
  .build()

driver.get('https://www.crossfit.com/').then(function () {
  // driver
  //   .findElement(webdriver.By.name('q'))
  //   .sendKeys('BrowserStack')
  //   .then(function () {
  //     driver.getTitle().then(function (title) {
  //       console.log(title)
  //       driver.quit()
  //     })
  //   })
  driver
    .takeScreenshot()
    .then((data) => {
      var base64Data = data.replace(/^data:image\/png;base64,/, '')
      fs.writeFile(
        'out.png',
        base64Data,
        'base64',

        function (err) {
          if (err) console.log(err)
        }
      )
      console.log('got data', data)
      driver.quit()
    })
    .catch((e) => {
      console.log(e)
    })
})
