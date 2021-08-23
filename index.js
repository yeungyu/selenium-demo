const {Builder, By, Key, until} = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

let service = new edge.ServiceBuilder("/mnt/c/code/msedgedriver.exe");

(async function example() {
    let driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();
    try {
        // Navigate to Url
        await driver.get('https://www.google.com');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        let firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        driver.quit();
    }
})();