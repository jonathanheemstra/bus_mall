# Bus Mall Lab
### Backstory

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

### Problem Domain

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side, so you'll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview (very cool!), plus, there are lots of online tools.

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

## The Plan
1. Build HTML scaffold
  - Needed Pieces
    - Create `h1` and `p` tags for page content
    - Structure content using HTML 5 tags
    - `div` container for images to be placed in via JS
    - `ul`/`li` for images to be placed in via JS
2. Build CSS scaffold
  - Needed Pieces
    - Set `body` to width of 960px
    - Set `body` to `margin: 0 auto;`
3. Set up JS global variables
  - Number of clicks
  - Images array
4. Set up JS random image selections
  - use `Math.random()` to get random number
  - set `Math.random()` to be a number between 1 and 19 using `Math.floor`
5. Print random image to page
  - use random number generated and images array to print image to page
6. Alter existing JS random image to pick 3 random numbers between 1 and 19
  - use a `for` loop to run `Math.random()` 3 times
  - use `if` statement to make sure no to random numbers match
7. Print 3 random images to the page based on random numbers generated.
  - images should be printed to `ul`/`li` tags inside of `div` container.
8. Create objects for each image
  - objects for images should track
    - image location i.e. `img/bag.jpg`
    - image name
    - number of clicks
    - number of times shown
9. Create event handler
  - event handler must
    - update image objects
10. Create event listener
  - Event listener must
    - fires on `click` event
    - fire only when customer clicks on image
    - display `alert();` informing customer to click on image if customer does not click on image
11. Set up test to only run up to a max of 25 times
  - Create an `if` loop that takes in the global variable for number of sets/clicks and runs for up to 25 times.
  - After running 25 times print results to the page.
