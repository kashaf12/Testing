const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--window-size=1620,1080"],
    slowMo: 100,
  });

  const page = await browser.newPage();

  await page.goto("https://namastedev.com");

  console.log("webpage loaded");

  await page.setViewport({
    height: 1080,
    width: 1620,
  });

  const coursesPageLink = "ul > li:nth-child(2) > a";

  await page.waitForSelector(coursesPageLink);

  console.log("course page loaded");

  await page.click(coursesPageLink);

  const frontendSystemDesignLink = ".mb-10 > a:nth-child(2)";

  await page.waitForSelector(frontendSystemDesignLink);

  await page.click(frontendSystemDesignLink);

  console.log("frontend system design page loaded");

  await browser.close();

  console.log("browser closed");
})();
