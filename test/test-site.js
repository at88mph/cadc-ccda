const webdriver = require('selenium-webdriver')
const seleniumHubServer = 'http://mach378.cadc.dao.nrc.ca:4444/wd/hub'
const languageConfigurations = [
    {
        lang: 'en',
        title: 'Canadian Astronomy Data Centre'
    },
    {
        lang: 'fr',
        title: 'Centre canadien de données astronomiques'
    }
]

async function runTestWithCaps(capabilities) {
  console.log(`Using Selenium at ${seleniumHubServer}`)
  let driver = new webdriver.Builder()
    .usingServer(seleniumHubServer)
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser'] }  // Because NodeJS language binding requires browserName to be defined
    })
    .build()

    try {
        const target = process.env.TARGET_URL || 'https://www.cadc-ccda.hia-iha.nrc-cnrc-gc.ca'
        console.log(`Checking consent banner at ${target}/en/`)
        await driver.get(`${target}/en/`)

        console.log('Waiting for consent banner')
        await driver.wait(webdriver.until.elementIsVisible(await driver.findElement(webdriver.By.css('button.popup-modal-dismiss'))), 3000)

        const consentButton = await driver.findElement(webdriver.By.css('button.popup-modal-dismiss'))
        await consentButton.click()

        console.log('Waiting for lang select title')
        await driver.wait(webdriver.until.titleMatches(/Canadian Astronomy Data Centre/), 5000)
        await driver.wait(webdriver.until.elementIsVisible(await driver.findElement(webdriver.By.xpath('//div[contains(@class, "sp-hb")]/div[1]/div[3]/section[1]/p/a'))), 5000)
        const englishButton = await driver.findElement(webdriver.By.xpath('//div[contains(@class, "sp-hb")]/div[1]/div[3]/section[1]/p/a'))
        await englishButton.click()

        for (const langConfig of languageConfigurations) {
            console.log(`Checking ${target}/${langConfig.lang}/`)
            await driver.get(`${target}/${langConfig.lang}/`)
    
            console.log('Waiting for title')
            await driver.wait(webdriver.until.titleMatches(new RegExp(`^${langConfig.title}`)), 5000)
        
            console.log('Waiting for main container')
            await driver.wait(webdriver.until.elementIsVisible(await driver.findElement(webdriver.By.css('main.container'))), 3000)
    
            // Collect the archive links on the main page.
            const archiveLinks = await driver.findElements(webdriver.By.xpath('//main[contains(@class, "container")]/div[2]/div/dl/dt/a'))
    
            const archiveLinkCount = archiveLinks.length
            console.log(`Found ${archiveLinkCount} archive links`)
    
            const archiveLinkDriver = new webdriver.Builder()
                                                   .usingServer(seleniumHubServer)
                                                   .withCapabilities({
                                                   ...capabilities,
                                                   ...capabilities['browser'] && { browserName: capabilities['browser'] }  // Because NodeJS language binding requires browserName to be defined
                                                   })
                                                   .build()
    
            for (let i = 0; i < archiveLinkCount; i++) {
                const elem = archiveLinks[i]
                await driver.executeScript("arguments[0].scrollIntoView(true);", elem)
                const href = await elem.getAttribute('href')
                const linkName = await elem.getText()
    
                console.log(`Trying ${linkName}`)
                // Try the link.
                await archiveLinkDriver.get(href)
                const title = await archiveLinkDriver.getTitle()
                if (title.match(/^404.*/)) {
                    throw new Error(`Broken link "${linkName}"`)
                }
            } 
        }
    } finally {
        console.log('Quitting!')
        await driver.quit()
    }
}

 const capabilities = {
    "browserName": "chrome",
    "acceptInsecureCerts": true,
    }
runTestWithCaps(capabilities)
