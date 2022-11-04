# Project REST-Rant

REST-Rant is an app where users can review restaurants.

### Routes
| Method      | Path        | Purpose     |
| ----------- | ----------- | ----------- |
| GET         | /           | Home Page   |
| GET         | /places     | Places index page |
| POST        | /places     | Create new place  |
| GET         | /places/new | Form page for creating a new place |
| GET         | /places/:id | Details about a place |
| PUT         | /places/:id | Update a place |
| GET         | /places/:id/edit | Form page for editing a place |
| DELETE      | /places/:id | Delete a place |
| POST        | /places/:id/rant | Create a rant |
| DELETE      | /places/:id/rant/:rantId | Delete a rant |
| GET         | *           | 404 Page    |

### Data for each restaurant
- name(string)
- city(string)
- state(string)
- cuisines(string)
- pic(string)