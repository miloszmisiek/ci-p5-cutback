## Manual Testing

Where automated unit testing was not completed or where extra testing was required to ensure proper functionality, the use of manual testing was implemented. The actions and results are listed below.

|     | User Actions           | Expected Results | Y/N | Comments    |
|:-----------:|------------------------|------------------|------|-------------|
| **Sign Up**     |                        |                  |      |             |
| 1           | Click on the Sing Up button | Redirection to signup page | Y |          |
| 2           | Type Sign Up URL | Redirection to signup page | Y |          |
| 3           | Form fields format validation | Correct input format required from user | Y |          |
| 4           | Submit signup with blank fields | Form validation triggered, highlight the field, submission aborted | Y |          |
| 5           | Submit signup with correct values | Redirection to sign in page, alert displayed with message that email confirmation has been send | Y |      Email send/receive tested with real email account    |
| 6           | Click email confirmation link in the send message | Redirects to login page | Y |          |
| 7           | Change screen size below 767 pixels width  | Backgorund image removed  | Y |          |

| **Sign In**     |                        |                  |      |             |
| 1           | Click on the Sing In button | Redirection to login page | Y |          |
| 2           | Sign in without confirmed email | Alert displayed with message that email is not verifed | Y |          |
| 3           | Sign in with confirmed email | Redirection to home page with Alert displayed on successfull sign in | Y |          |
| 4           | Type in a valid username or email with the password for the login and submit button| Redirection to home page with alert displayed on successful login  | Y |          |
| 5           | Type in the invalid username or email with the password for the login and submit button | Alert displayed under username/email field | Y |          |
| 6           | Click in the Sign up link in the 'Don't have accout' section  | Redirection to sing up page  | Y |          |
| 7           | Sign in page rendered  | Backgorund image displayed for sign in page  | Y |          |
| 8           | Change screen size below 767 pixels width  | Backgorund image removed  | Y |          |

| **Navbar**     |                        |                  |      |             |
| 1           | User click on the logo | Redirection to home page | Y | Page is not refreshed if user is already on the home page       |
| 2           | Logged in user visit app | Profile dropdown displayed in the navbar | Y |       |
| 3           | Annonymous user visit app | Sign in and sign up buttons dispayed in the navbar | Y |       |
| 4           | Navbar rendered | Logo, search bar and logged-in/logged-out icons displayed | Y |       |

| **Searching**     |                        |                  |      |             |
| 1           | User clicks in the serach bar field | Searching input triggered | Y |        |
| 2           | User types in the serach bar field | Loading spinner displayed and products render including typed keyword | Y |   Tested for title, description, username, street, city and country     |
| 3           | User clicks on the 'Categories' dropdown button  | Dropdown displayed with available categories and all products as choices  | Y |          |
| 4           | User clicks on Category link  | Products rendered for chosen category  | Y |   Category name displayed in the button, URL updated for category selected       |
| 5           | User clicks on All link  | All products rendered  | Y |   User back at the home page       |

| **Filtering**     |                        |                  |      |             |
| 1           | Home page rendered |  Filters button displayed, filters function hided | Y |     |
| 2           | User clicks on filters button |  Filters function displayed: in stock, show all, country, sorting | Y |  In stock selected - default rendering for products is set for only available products   |
| 3           | User clicks on filters button with filters displayed |  Filters function hided | Y |   |
| 4           | User clicks in stock switch |  Switch changes position, products displayed with 'out of stock' included | Y |   |
| 5           | User clicks in stock deslected switch |  Switch changes position, products displayed without 'out of stock' | Y |   |
| 6           | User clicks show all button |  All filters reset | Y | Sorting function remains unchanged  |
| 7           | User clicks on country filter |  Dropdown with country options opens | Y | Only countires which were already used by users during product creation are available.   |
| 8           | User clicks on country option |  Products rendered with country selected by user | Y |  If product is 'out of stock' it will not be displayed, unless user uses in stock filter  |
| 8           | User clicks on country option |  Products rendered with country selected by user | Y |  If product is 'out of stock' it will not be displayed, unless user uses in stock filter  |
|             |   |   |  |          |

| **Profile Dropdown**     |                        |                  |      |             |
| 1           | Permitted users to click Edit button | Redirects to Edit Task page | Y |      |
| 2           | Permitted users click Delete button | Browser's confirm message appears to check user's decision | Y |      |
| 3           | Any user opening modal | Title, Description and details dates are visible | Y |      |
|             |   |   |  |          |

| **Products Page**     |                        |                  |      |             |
| 1           | User opens My Profile page | Account section is visible. Only tasks assigned to the user are displayed in the table. The top message reflects the current user's data | Y |      |
| 2           | User clicks Account Edit button | Redirects to Edit Profile page | Y |      |
| 3           | User clicks Account Delete button | Browser's confirm message appears to check user's decision | Y |      |
| 4           | User clicks Ok in Browser's confirm box | Account is deleted, redirects to landing page | Y |      |
| 5           | User clicks Cancel in Browser's confirm box | Redirects to previous page | Y |      |
|             |   |   |  |          |

| **Create Product Form**     |                        |                  |      |             |
| 1           | User opens Edit Profile page | Form is prefilled with current user data | Y |      |
| 2           | User clicks Submit button | Form is prefilled with current user data | Y |  Browser's confirm message appears to check user's decision    |
| 4           | User clicks Ok in Browser's confirm box without any changes | Redirects to My Profile page | Y |      |
| 5           | User clicks Cancel in Browser's confirm box | Redirects to Edit Profile page | Y |      |
| 6           | User clicks Ok in Browser's confirm box with any change except Rank | The fields are updated with user's new data | Y |      |
| 7           | User clicks Cancel in Browser's confirm box with any change except Rank | Redirects to Edit Profile page | Y |      |
| 8           | User clicks Ok in Browser's confirm box with Rank changed | Redirects to Account Inactive page as a profile is set to inactive. The profile can be set to active from the admin panel by Master | Y |   Rank change decision should be consulted first with the supervisor and he should be aware of this change   |
| 9           | User clicks Cancel in Browser's confirm box with Rank changed | Redirects to Edit Profile page | Y |      |
|             |   |   |  |          |

| **Edit Product Form**     |                        |                  |      |             |
| 1           | User clicks Change Password button with blank fields | Form validation is triggered highlighting fields which are empty | Y |      |
| 2           | Typed in current password does not match with the password saved in database | The message is displayed informing a user of wrongly typed password | Y |      |
| 3           | New Password does not match the New Password (again) | The message is displayed informing a user of mismatched passwords| Y |      |
| 4           | User types correct values and presses Reset Password button | Redirects to Edit Profile page, the password is updated | Y |      |
|             |   |   |  |          |

| **Product Page**     |                        |                  |      |             |
| 1           | Junior opens Add Task page | Form is rendered, assigned to the field has only current's user username option available | Y |      |
| 2           | User opens Add Task page | Assigned to field default value is current user's username | Y |      |
| 3           | Junior submit the form with valid data | Redirects to Tasks Home page, a new task is added with approval status Waiting to be approved | Y |      |
| 4           | User submits a form with End Date before Start Date | Form validation is triggered, a message appears to inform the user of wrong entry | Y |      |
| 5           | Senior opens Add Task page | Form is rendered, assigned to the field has all users available except Master | Y |      |
| 6           | Senior submit the form with Priority Medium or Low | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
| 7           | Senior submit the form with Priority High | Redirects to Tasks Home page, a new task is added with approval status Waiting for approval | Y |      |
| 8           | Master opens Add Task page | Form is rendered, assigned to the field has all users available including Master | Y |      |
| 9           | Master submits the form with any Priority | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
|             |   |   |  |          |

| **Comments**     |                        |                  |      |             |
| 1           | Junior opens Edit Task page | Form is rendered, assigned to the field has only current's user username option available | Y |      |
| 2           | Junior submits the form for the task with N/R approval status | Redirects to Tasks Home page with task approval status Waiting for approval | Y |      |
| 2           | Junior submits the form for the task with N/R approval status | Redirects to Tasks Home page with task approval status Waiting for approval | Y |      |
| 4           | User submits a form with End Date before Start Date | Form validation is triggered, a message appears to inform the user of wrong entry | Y |      |
| 5           | Senior opens Edit Task page | Form is rendered, assigned to the field has all users available except Master | Y |      |
| 6           | Senior edit form and submits with Priority Medium or Low | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
| 7           | Senior edit form and submits with Priority High | Redirects to Tasks Home page, a new task is added with approval status Waiting for approval | Y |      |
| 8           | Master opens Edit Task page | Form is rendered, assigned to the field has all users available including Master | Y |      |
| 9           | Master edit form and submits with any Priority | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
|             |   |   |  |          |

| **Create Comment Form**     |                        |                  |      |             |
| 1           | User clicks Back on the top button | The page is scrolled up to the top | Y |      |
|             |   |   |  |          |

| **Edit Comment Form**     |                        |                  |      |             |
| 1           | User submits a valid request | Green message apears on top of the page. Automatically disapears after 5 seconds. | Y |      |
|             |   |   |  |          |

| **Ratings**     |                        |                  |      |             |
| 1           | Junior opens Edit Task page | Form is rendered, assigned to the field has only current's user username option available | Y |      |
| 2           | Junior submits the form for the task with N/R approval status | Redirects to Tasks Home page with task approval status Waiting for approval | Y |      |
| 2           | Junior submits the form for the task with N/R approval status | Redirects to Tasks Home page with task approval status Waiting for approval | Y |      |
| 4           | User submits a form with End Date before Start Date | Form validation is triggered, a message appears to inform the user of wrong entry | Y |      |
| 5           | Senior opens Edit Task page | Form is rendered, assigned to the field has all users available except Master | Y |      |
| 6           | Senior edit form and submits with Priority Medium or Low | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
| 7           | Senior edit form and submits with Priority High | Redirects to Tasks Home page, a new task is added with approval status Waiting for approval | Y |      |
| 8           | Master opens Edit Task page | Form is rendered, assigned to the field has all users available including Master | Y |      |
| 9           | Master edit form and submits with any Priority | Redirects to Tasks Home page, a new task is added with approval status N/R (Not Required) | Y |      |
|             |   |   |  |          |

| **Product Gallery**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

| **Edit Profile Form**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

| **Change Password**     |                        |                  |      |             |
| 1           | Type in correct email and press Rest Passwrod| Redirection to Password Rest done page | Y |   Tested with real email account       |
| 2           | Type in incorrect email and press Reset Password | Validation message appears to inform the user of incorrect email | Y |          |
| 3           | Press Reset Password with blank email field | Form validation triggered, submission aborted | Y |          |
|             |   |   |  |          |

| **Footer**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

| **Modals**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

| **Alerts**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

| **Not Found Page**     |                        |                  |      |             |
| 1           | User does not shows signs of activity in the app page | After 9 minutes the modal with warning appears, user have 40 seconds to move a mouse cursor or type in the app page. | Y |      |
| 2           | User does not shows signs of activity in the app page after 9 min and 40 sec | Automatic logout and redriection to the Sign In page | Y |      |
| 2           | User moves a mouse or types in the app page | Timer reset and modal disapeares | Y |      |
|             |   |   |  |          |

[Back to contents](#contents)
