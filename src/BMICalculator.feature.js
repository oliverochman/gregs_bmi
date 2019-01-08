describe('BMI Converter', () => {
  beforeAll(async () => {
      // visit the application running on the Jest Development Server
      await page.goto('http://localhost:3000');
  });

  beforeEach(async () => {
      // Reload the application between tests to reset state
      await page.reload();
  });

  describe('Metric method', async () => {
      beforeEach( async () => {
          // This before block will be executed prior to each test in this describe block
          await page.type('input[name="weight"]', '95')
          await page.type('input[name="height"]', '186')
      })

      it('displays assesment', async () => {   
          await expect(page).toMatch('You are Overweight')
      })

      it('displays BMI value', async () => {   
          await expect(page).toMatch('BMI of 27.46')
      })
  })
})