## Manual Testing

Below are manual tests completed during the product development.

|     | User Actions           | Expected Results | Y/N | Comments    |
|:-----------:|------------------------|------------------|------|-------------|
| **Sign Up**     |                        |                  |      |             |
| 1           | Click on the Sing Up button | Redirection to signup page | Y |          |
| 2           | Type Sign Up URL | Redirection to signup page | Y |          |
| 3           | Form fields format validation | Correct input format required from user | Y |          |
| 4           | Submit the form with blank fields | Form validation triggered, highlight the field, submission aborted | Y |          |
| 5           | Submit the form with correct values | Redirection to the sign-in page, alert displayed with a message that email confirmation has been sent | Y |      Email send/receive tested with real email account    |
| 6           | A user clicks the email confirmation link in the message sent | Redirects to login page | Y |          |
| 7           | Change screen size below 767 pixels width  | Background image removed  | Y |          |
| **Sign In**     |                        |                  |      |             
| 1           | Click on the Sing In button | Redirection to login page | Y |          |
| 2           | Sign in without confirmed email | Alert displayed with a message that email is not verified | Y |          |
| 3           | Sign in with confirmed email | Redirection to home page with Alert displayed on successful sign-in | Y |          |
| 4           | Type in a valid username or email with the password for the login and submit button| Redirection to home page with alert displayed on successful login  | Y |          |
| 5           | Type in the invalid username or email with the password for the login and submit button | Alert displayed under username/email field | Y |          |
| 6           | Click in the sign-up link in the 'Don't have account section  | Redirection to sign up page  | Y |          |
| 7           | Sign-in page rendered  | Background image displayed for sign-in page  | Y |          |
| 8           | Change screen size below 767 pixels width  | Background image removed  | Y |          |
| **Navbar**     |                        |                  |      |             
| 1           | User click on the logo | Redirection to home page | Y | Page is not refreshed if a user is already on the home page       |
| 2           | Logged-in user visit app | Profile dropdown displayed in the navbar | Y |       |
| 3           | Anonymous user visit app | Sign in and sign up buttons displayed in the navbar | Y |       |
| 4           | Navbar rendered | Logo, search bar and logged-in/logged-out icons displayed | Y |       |
| **Searching**     |                        |                  |      |             
| 1           | User clicks in the search bar field | Searching input triggered | Y |        |
| 2           | User types in the search bar field | Loading spinner displayed and products render including typed keyword | Y |   Tested for a title, description, username, street, city and country     |
| 3           | User clicks on the 'Categories' dropdown button  | Dropdown displayed with available categories and all products as choices  | Y |          |
| 4           | User clicks on Category link  | Products rendered for chosen category  | Y |   Category name displayed in the button, URL updated for the category selected       |
| 5           | User clicks on All link  | All products rendered  | Y |   User back at the home page       |
| **Home Page**     |                        |                  |      |             
| 1           | Home page displayed | The Products Page component is displayed with the Navbar and the footer | Y |  Only available (in stock) products are displayed      |
| **Filtering**     |                        |                  |      |             
| 1           | Home page rendered |  Filters button displayed, filters function hidden | Y |     |
| 2           | User clicks on filters button |  Filters function displayed: in stock, show all, country, sorting | Y |  In stock selected - default rendering for products is set for only available products   |
| 3           | User clicks on filters button with filters displayed |  Filters function hid | Y |   |
| 4           | User clicks in stock switch |  Switch changes position, products displayed with 'out of stock' included | Y |   |
| 5           | User clicks in stock deselected switch |  Switch changes position, products displayed without 'out of stock | Y |   |
| 6           | User clicks show all button |  All filters reset | Y | Sorting function remains unchanged  |
| 7           | User clicks on country filter |  Dropdown with country options opens | Y | Only countries which were already used by users during product creation are available.   |
| 8           | User clicks on country option |  Products rendered with country selected by user | Y |  If the product is 'out of stock it will not be displayed unless the user uses in stock filter  |
| 9           | User clicks on sorting selection | Selection menu displayed with available options: Ascending/Descending - Created, Price, Title, Description, Avg Score, All Scores | Y |    |
| 10          | User clicks on available option | Products are sorted as per selection | Y |  Tested on all options  |
| **Profile Dropdown**     |                        |                  |      |             
| 1           | Sign in user clicks on Profile Dropdown | Dropdown list popups with: 'signed in as' corresponding to currently logged user's username, Home link, Profile link, Settings link, Logout link | Y |      |
| 2           | User clicks outside the list | Dropdown menu closes | Y |      |
| 3           | User clicks the avatar button | Dropdown menu closes | Y |      |
| 4           | User clicks the Home link | Redirection to home page | Y |  No refresh if the user is already on the home page    |
| 5           | User clicks the Profile link | Redirection to user's profile page | Y |  No refresh if the user is already on the profile page    |
| 6           | User clicks the Settings link | Redirection to user's setting's page (Account settings) | Y |  No refresh if a user is already on the account page    |
| 7           | User clicks the Logout link | Redirection to the home page, the user is logged-out, profile dropdown list is not available, Sign-in and Sign-up buttons displayed, alert displayed with confirmation message | Y |   |
| 8           | User clicks the Logout link | Redirection to the home page, the user is logged-out, profile dropdown list is not available, Sign-in and Sign-up buttons displayed, alert displayed with confirmation message | Y |   |
| **The Products Component**     |                        |                  |      |             
| 1           | No products in the database | The ripper surfer icon with message indicates nothing for display | Y |      |
| 2           | Less than 13 products in the database | Products render in three columns with three product cards per row | Y |      |
| 3           | More than 12 products in the database | Pagination control displayed at the button with the number of sites calculated base on the number of products in the database | Y |      |
| 4           | User clicks on the right arrow button in the pagination control | Next page is displayed with paginated products | Y |  If the last page is displayed nothing happens    |
| 5           | User clicks on the left arrow button in the pagination control | the Previous page is displayed with paginated products | Y |   If the first page is displayed nothing happens   |
| 6           | User clicks on the site number | Relevant site is displayed with paginated products for the site number | Y |   If the current page is displayed nothing happens   |
| 7           | User uses pagination buttons | Page is scrolled to the top | Y |   |
| 8           | User clicks arrow in the carousel component (for product gallery) | Next/Previous image is displayed | Y |   |
| **The Product Card Component**     |                        |                  |      |             
| 1           | The Product Card for the available product with no gallery is displayed | Displayed: the default image, the product's title, horizontal rule, price, product's rating and counters for ratings and reviews | Y |      |
| 2           | The Product Card for the available product with one image is displayed | Displayed: the product's image, title, horizontal rule, price, product rating and counters for ratings and reviews | Y |      |
| 3           | The Product Card for the available product with more than one image is displayed | Displayed: the Carousel component with product's images, title, horizontal rule, price, product's rating and counters for ratings and reviews | Y |      |
| 4           | The Product Card for the unavailable product is displayed | 'Temporarily Out Of Stock overlay is displayed on top of the image section | Y |      |
| 5           | The user clicks the product title | Redirection to the Product page | Y |      |
| **The Carousel Component**     |                        |                  |      |             
| 1           | Less than 2 images in product's gallery | Carousel component not displayed, Asset component used with the product's image source | Y |      |
| 2           | More than 2 images in product's gallery | Carousel component displayed, tiles correspond to the length of gallery array  | Y |      |
| 3           | Carousel displayed on the home/products page | Animation disabled  | Y |      |
| 4           | Carousel displayed on the product page | Animation running  | Y |      |
| **The Product Page Component**     |                        |                  |      |             
| 1           | The product page is displayed | Displayed: Carousel/Image/Default image, rating section, comment section, product info displayed  | Y |      |
| 2           | The product's owner clicks the product title | Redirection to the product edit page | Y |      |
| 3           | The user clicks the contact user link | Redirection to the owner's profile page | Y |      |
| 4           | The user clicks the contact telephone link | The phone call function triggered | Y |      |
| 5           | The user clicks the contact email link | The user's device's default email app triggered | Y |      |
| 5           | The user clicks the location link | Redirection to google maps service with the product's address, city and country provided | Y |      |
| **Comments**     |                        |                  |      |             
| 1           | Logged-in user clicks comment text in the Comment component on the product page | Input field active, user can type a comment | Y |      |
| 2           | Logged-in user submits a comment | Comment is displayed, reviews counter is updated, more button is available next to submitted comment | Y |      |
| 3           | The comment's owner clicks on the more button | Edit button and the delete button is displayed in the popover | Y |      |
| 4           | The comment's owner clicks on the edit button | Edit comment component is displayed with save and delete button | Y |      |
| 5           | The comment's owner clicks the save button | The comment is updated if changes present | Y |      |
| 6           | The comment's owner clicks the cancel button | The Edit Comment component disappears | Y |      |
| 7           | The comment's owner clicks the delete button | Modal is rendered to confirm the user's choice | Y |      |
| 8           | The comment's owner clicks the delete button in the modal | The comment is deleted and not displayed on the product page. The review counter is updated | Y |      |
| 9           | The comment's owner clicks the close button in the modal | Modal is closed, comment removal cancelled | Y |      |
| **The Profile Page**     |                        |                  |      |             
| 1           | The profile's owner clicks on the avatar | Redirection to the settings page | Y |      |
| 2           | The Profile Page displayed to the logged-in user | Add product button displayed | Y |  Not available for anonymous users    |
| 3           | The logged-in user clicks the add product button | Redirection to the create product page | Y |      |
| 4           | The Profile Page owner has no products | No result's asset component is displayed | Y |      |
| 5           | The Profile Page owner has products | The Products Page component is used to display products with owner filter applied | Y |  Tested for pagination - same as the Products component results    |
| 6          | The page is displayed to any user | The profile's owner avatar, username, and counters for products, all ratings and the avg rating (if any) are displayed | Y |  If any of the values is zero, the sad emoticon is displayed    |
| **The Edit Profile Page**     |                        |                  |      |             
| 1           | The profile's owner enters the profile edit page | The profile edit page is rendered with: the personal information section including email address, inputs for username, first name, last name and phone number; the change password section with inputs for the new password and confirm password; the avatar component | Y |      | 
| 2           | The profile's owner clicks the edit button | Input fields are enabled and the user can edit data; the save and cancel buttons are displayed, and the edit button is hidden | Y |      |
| 3           | The profile's owner submits the form with empty personal information data | The save function aborted, alerts displayed for empty fields | Y |  If the user decides to edit data, empty data are not permitted, the user can cancel and leave his profile without data    |
| 4           | The profile's owner submits the form with empty Change Password data | The save option is allowed | Y |  Change password functionality is triggered only if data is fetched from the fields    |
| 5           | The profile's owner clicks the avatar | The file input window pops up and the user can select a new image | Y |   |
| 6           | The profile's owner clicks the avatar | The file input window pops up and the user can select a new image | Y |   |
| 7           | The profile's owner clicks the save button with the avatar image updated | The profile picture is updated, redirection to  | Y |   |
| 8           | The profile's owner clicks the save button with a new password matching the confirmation password | The profile picture is updated | Y |   |
| 9           | The profile's owner clicks the save button with a new password not matching the confirmation password | The saving is aborted, and the alert for matching passwords is displayed | Y |   |
| 10          | The profile's owner clicks the save button with correct inputs in the personal information section | The form is submitted, redirection to the home page, the alert is displayed on successful update | Y |   |
| **The Create Product Page**     |                        |                  |      |             
| 1           | The anonymous user enters create product page from URL | Redirection to home page | Y |      |
| 2           | The logged-in user enters create product page from URL/profile page add product | The product creation component renders including the product gallery component and the product information component | Y |      |
| 3           | The logged-in user clicks the plus button below the gallery component | The file selection window is displayed, and users can select and add the images | Y |   Only image selection is allowed - tested   |
| 4           | The logged-in user adds the image | The image is displayed in the preview and the thumbnails, and the deletion button is displayed | Y |    |
| 5           | The logged-in user clicks the deletion button | Users are prompted for choice confirmation, if removal is confirmed - the image is removed, if cancelled the image remains unchanged| Y |    |
| 6           | The logged-in user adds the fifth picture | The add button is changed to cross button | Y |    |
| 7           | The logged-in user clicks the cross button | The alert is displayed with a message that only five pictures are allowed per product. The adding functionality is blocked | Y |    |
| 8           | The logged-in user submits the form with empty fields | The form is rejected, alerts for fields are displayed | Y |    |
| 9           | The logged-in user submits a form with valid data | The form is submitted, redirection to the product page | Y |    |
| **The Edit Product Form**     |                        |                  |      |             
| 1           | The anonymous user enters edit product page from URL | Redirection to home page | Y |      |
| 2           | The logged-in user enters edit product page from URL/product page title link | The product edit component renders including the product gallery component and the product information component with data fetched from database | Y |      |
| 3           | The logged-in user clicks the plus button below the gallery component | The file selection window is displayed, and users can select and add the images | Y |   If the product has less than 5 images   |
| 4           | The logged-in user adds the image | The image is displayed in the preview and the thumbnails, the deletion button is displayed | Y |    |
| 5           | The logged-in user clicks the product's image deletion button | Users are prompted for choice confirmation, if removal is confirmed - the image is removed, if cancelled the image remains unchanged| Y |    |
| 6           | The logged-in user adds a fifth picture | The add button is changed to the cross button | Y |    |
| 7           | The logged-in user clicks the cross button | The alert is displayed with a message that only five pictures are allowed per product. The adding functionality is blocked | Y |    |
| 8           | The logged-in user submits a form with empty fields | The form is rejected, alerts for fields are displayed | Y |    |
| 9           | The logged-in user submits a form with valid data - unchanged | The form is submitted, redirection to the product page | Y |    |
| 10           | The logged-in user submits a form with valid data - changed | The form is submitted, redirection to the product page | Y |    |
| 11           | The logged-in user clicks the delete button | Users are prompted for choice confirmation, if removal is confirmed - the product is removed, if cancelled then the image remains unchanged | Y |    |
| **Ratings**     |                        |                  |      |             
| 1           | Anonymous user clicks on the rating's stars | Rating functionality not available | Y |      |
| 2           | Logged-in user hovers over rating's stars | Selected stars are highlighted | Y |      |
| 3           | Logged-in user clicks first time any star | The star counter is updated including counters for every star, an alert is displayed that the rate was accepted | Y |      |
| 4           | Logged-in user clicks next time any star | The star counter is updated including counters for every star, an alert is displayed that the rate was accepted | Y |      |
| **Footer**     |                        |                  |      |             
| 1           | Users click the logo in the footer | Redirection to home page | Y |  If the home page already displayed - no refresh    |
| 2           | Users click the email icon | The user's device's default email service is triggered with the creator's email address | Y |      |
| 3           | Users click the LinkedIn icon | Redirection to creator's LinkedIn profile | Y |      |
| 4           | Users click the GitHub icon | Redirection to creator's GitHub profile | Y |      |
| 5           | Users scroll down to any page end | The footer is displayed | Y |      |
| **Not Found Page**     |                        |                  |      |             
| 1           | User enters not valid URL with the website base URL present | The Not Found page component is rendered | Y |      |



[Back to contents](#contents)


## ESLint Code Validation

The product's code was checked with the ESLint plugin for VSCode during the product development process. No warnings are present for the production version.
