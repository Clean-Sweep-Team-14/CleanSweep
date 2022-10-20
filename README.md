# CleanSweep

Clean Sweep is an app that gamifies household chores. 

## Features

- An authenticated user can create a profile.
- An authenticated user can create chores.
- Unauthenticated can ***.
- CleanSweep uses a registration and token-based authentication.
- A user can add chores to the calendar that corrosponds to the day they will complete the chore.
- Authenticated users can add friends and unfriend other user within the app.
- A chore can be deleted or updated by the user who accepted the chore.
- 
## Run Locally

Clone the project

```bash
  git clone https://github.com/Clean-Sweep-Team-14/CleanSweep
```

Go to the project directory

```bash
  cd CleanSweep
```

Run your virtual enviroment with:

```bash
   pipenv shell
```

(If running for the first time) migrate with:

```bash
   python manage.py migrate
```

Start the server

```bash
  python manage.py runserver
```

## Installation

Unstalling the project with npm

```bash
  npm install <project>
  cd <project>
```
    
## API Reference

#### API Root

```http
GET https://clean-sweep-team-14.herokuapp.com

```

| Body       | Type     | Description                    |
| :--------- | :------- | :----------------------------- |
| `api_root` | `string` | The root entrypoints to the API |

Request Sample:

```
GET 
Content-Type: json
Authorization: N/A
Host: https://clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 OK)

```

{
    "chores": "https://clean-sweep-team-14.herokuapp.com/chores/",
	"easy": "https://clean-sweep-team-14.herokuapp.com/chores/easy/",
	"medium": "https://clean-sweep-team-14.herokuapp.com/chores/medium/",
	"hard": "https://clean-sweep-team-14.herokuapp.com/chores/hard/",
	"bonus": "https://clean-sweep-team-14.herokuapp.com/chores/bonus/",
	"tracker": "https://clean-sweep-team-14.herokuapp.com/chores/tracker/"
}

```

---

#### New User Create    

```http
POST - https://clean-sweep-team-14.herokuapp.com/auth/users/
```

| Body       | Type     | Description             |
| :--------- | :------- | :---------------------- |
| `username` | `string` | New Username            |
| `password` | `string` | User generated password |
| `email`    | `string` | User generated email    |

Request Sample:

```
POST /auth/users/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	"username": "TestUserLogin" ,
	"password": "TestUserPassword",
	"email": "testemail@fake.com"
}

```

Response Example (201 Created)

```
{
	"email": "testemail@fake.com",
	"username": "TestUserLogin",
	"id": 5
}

```

#### Token Authentication / User Login

```http
POST - https://clean-sweep-team-14.herokuapp.com/auth/token/login/
```

| Body       | Type     | Description             |
| :--------- | :------- | :---------------------- |
| `username` | `string` | New Username            |
| `password` | `string` | User generated password |

Request Sample:

```
POST /auth/token/login/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	"username": "TestUserLogin" ,
	"password": "TestUserPassword"
}

```

Response Example (200 OK)

```
{
	"auth_token": "****************************************"
}

```

---

#### User Logout - User Authentication **Required**

```http
POST - https://clean-sweep-team-14.herokuapp.com/auth/token/logout/
```

| Body       | Type     | Description             |
| :--------- | :------- | :---------------------- |
| `username` | `string` | New Username            |
| `password` | `string` | User generated password |

Request Sample:

```
POST /auth/token/logout/
Content-Type: json
Authorization: Required
Host: clean-sweep-team-14.herokuapp.com

{
	"username": "TestUserLogin" ,
	"password": "TestUserPassword",
}
```

Response Example (204 No Content)

```
No body returned for response

```

#### Get a List of All Chores

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 12,
	"next": "https://clean-sweep-team-14.herokuapp.com/chores/?limit=10&offset=10",
	"previous": null,
	"results": [
		{
			"chore": "Sweep the floor",
			"point": 5,
			"pk": 1
		},
		{
			"chore": "Vacuum",
			"point": 5,
			"pk": 2
		},
		{
			"chore": "Do the dishes",
			"point": 5,
			"pk": 3
		},
		{
			"chore": "Mopping",
			"point": 25,
			"pk": 4
		}
    ]
}
```

#### Get a List of Easy Chores - 5 Points

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/easy/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/easy/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 3,
	"next": null,
	"previous": null,
	"results": [
		{
			"chore": "Sweep the floor",
			"point": 5,
			"pk": 1
		},
		{
			"chore": "Vacuum",
			"point": 5,
			"pk": 2
		},
		{
			"chore": "Do the dishes",
			"point": 5,
			"pk": 3
		}
	]
}
```

#### Get a List of Medium Chores - 25 Points

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/medium/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/medium/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 3,
	"next": null,
	"previous": null,
	"results": [
		{
			"chore": "Mopping",
			"point": 25,
			"pk": 4
		},
		{
			"chore": "Change/Clean bedsheets",
			"point": 25,
			"pk": 5
		},
		{
			"chore": "Clean the sink",
			"point": 25,
			"pk": 6
		}
	]
}
```

#### Get a List of Hard Chores - 100 Points

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/hard/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/hard/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 3,
	"next": null,
	"previous": null,
	"results": [
		{
			"chore": "Clean the baseboards",
			"point": 100,
			"pk": 7
		},
		{
			"chore": "Clean the gutters",
			"point": 100,
			"pk": 8
		},
		{
			"chore": "Clean outside of windows",
			"point": 100,
			"pk": 9
		}
	]
}
```

#### Get a List of Bonus Chores - 30 Points

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/bonus/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/bonus/
Content-Type: json
Authorization: N/A
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 3,
	"next": null,
	"previous": null,
	"results": [
		{
			"chore": "The dreaded junk drawer...",
			"point": 30,
			"pk": 10
		},
		{
			"chore": "Call your parents",
			"point": 30,
			"pk": 11
		},
		{
			"chore": "Tell someone you love them",
			"point": 30,
			"pk": 12
		}
	]
}
```

#### Create an Assigned Chore - User Authentication **Required**

```http
POST - https://clean-sweep-team-14.herokuapp.com/chores/tracker/
```

| Body       | Type     | Description                                  |
| :--------- | :------- | :--------------------------------------------|
| `chore`    | `string` | The Chore PK                                 |
| `day `     | `int`    | The date and time the chore will be compled  |

Request Sample:

```
POST /chores/tracker/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"chore":"1",
	"day": "1999-10-12T10:16:11-04:00"
}
```

Response Example (201 Created)

```
{
	"chore": 1,
	"day": "1999-10-12T10:16:11-04:00",
	"complete": false,
	"user": "TestUserLogin",
	"pk": 1
}

```

#### Get a List of Assigned Chores - User Authentication **Required**

```http
GET - https://clean-sweep-team-14.herokuapp.com/chores/tracker/
```

| Body       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `""`       | `""`     |   ""                |

Request Sample:

```
GET /chores/tracker/
Content-Type: json
Authorization: Required
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 3,
	"next": null,
	"previous": null,
	"results": [
		{
			"chore": 1,
			"day": "1999-10-12T10:16:11-04:00",
			"complete": false,
			"user": "TestUserLogin",
			"pk": 1
		},
		{
			"chore": 4,
			"day": "1999-10-12T10:16:11-04:00",
			"complete": false,
			"user": "TestUserLogin",
			"pk": 2
		},
		{
			"chore": 3,
			"day": "1999-10-12T10:16:11-04:00",
			"complete": false,
			"user": "TestUserLogin",
			"pk": 3
		}
	]
}
```

#### Update an Assigned Chore - User Authentication **Required**

```http
PUT - https://clean-sweep-team-14.herokuapp.com/chores/tracker/pk/
```

| Body       | Type     | Description                                  |
| :--------- | :------- | :--------------------------------------------|
| `chore`    | `string` | The Chore PK                                 |
| `day `     | `int`    | The date and time the chore will be compled  |
| `complete` | `string` | Boolean for checking a chore completed       | 

Request Sample:

```
PUT /chores/tracker/pk/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"chore": "1",
	"day": "1999-10-12T10:16:11-04:00",
	"complete": "true"
}
```

Response Example (200 OK)

```
{
	"chore": 1,
	"day": "1999-10-12T10:16:11-04:00",
	"complete": true,
	"user": "TestUserLogin",
	"pk": 1
}

```

#### Delete an Assigned Chore - User Authentication **Required**

```http
DELETE - https://clean-sweep-team-14.herokuapp.com/chores/tracker/pk/
```

| Body       | Type     | Description                                  |
| :--------- | :------- | :--------------------------------------------|
| `chore`    | `string` | The Chore PK                                 |
| `day `     | `int`    | The date and time the chore will be compled  |
| `complete` | `string` | Boolean for checking a chore completed       | 

Request Sample:

```
DELETE /chores/tracker/pk/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"chore": "1",
	"day": "1999-10-12T10:16:11-04:00",
	"complete": "true"
}
```

Response Example (204 No Content)

```
{
	No body returned for response 
}

```

#### Show The Total Points Of A Logged In User - User Authentication **Required**

```http
GET - https://clean-sweep-team-14.herokuapp.com/user/points/
```

| Body       | Type     | Description               |
| :--------- | :------- | :-------------------------|
| `""`       | `""`     | ""                        |


Request Sample:

```
GET /user/points/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"chore__point__sum": 10
}

```

#### Show Friends Of A Logged In User - User Authentication **Required**

```http
GET - https://clean-sweep-team-14.herokuapp.com/friends/
```

| Body       | Type     | Description               |
| :--------- | :------- | :-------------------------|
| `""`       | `""`     | ""                        |


Request Sample:

```
GET /friends/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	""
}
```

Response Example (200 Ok)

```
{
	"count": 1,
	"next": null,
	"previous": null,
	"results": [
		{
			"pk": 1,
			"friend": 3
		}
	]
}

```

#### Add A Friend For A Logged In User - User Authentication **Required**

```http
POST - https://clean-sweep-team-14.herokuapp.com/friends/
```

| Body       | Type     | Description                          |
| :--------- | :------- | :------------------------------------|
| `friend`   | `Int`    | "The User's PK being friended"       |


Request Sample:

```
POST /friends/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"friend": "3"
}
```

Response Example (201 Created)

```
{
	"pk": 1,
	"friend": 3
}
```

#### Show a Friend Relationship between Users - User Authentication **Required**

```http
GET - https://clean-sweep-team-14.herokuapp.com/friends/pk-of-relationship
```

| Body       | Type     | Description               |
| :--------- | :------- | :-------------------------|
| `""`       | `""`     | ""                        |


Request Sample:

```
GET /friends/pk-of-relationship
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"""
}
```

Response Example (201 Created)

```
{
	"count": 1,
	"next": null,
	"previous": null,
	"results": [
		{
			"pk": 1,
			"friend": 3
		}
	]
}
```

#### Delete a Friend Relationship between Users / Unfriending - User Authentication **Required**

```http
DELETE - https://clean-sweep-team-14.herokuapp.com/friends/pk-of-relationship
```

| Body       | Type     | Description               |
| :--------- | :------- | :-------------------------|
| `""`       | `""`     | ""                        |


Request Sample:

```
DELETE /friends/pk-of-relationship
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"""
}
```

Response Example (201 Created)

```
No body returned for response
```

#### The Global Leaderboard - User Authentication **Required**

```http
GET - https://clean-sweep-team-14.herokuapp.com/leaderboard/global/
```

| Body       | Type     | Description               |
| :--------- | :------- | :-------------------------|
| `""`       | `""`     |  ""                       |


Request Sample:

```
GET /leaderboard/global/
Content-Type: json
Authorization: Required 
Host: clean-sweep-team-14.herokuapp.com

{
	"""
}
```

Response Example (200 Ok)

```
{
	"count": 9,
	"next": null,
	"previous": null,
	"results": [
		{
			"pk": 2,
			"username": "Groot",
			"total_points": 0
		},
		{
			"pk": 3,
			"username": "testuser",
			"total_points": 100
		},
		{
			"pk": 4,
			"username": "NotoriousBOB",
			"total_points": 0
		},
		{
			"pk": 9,
			"username": "Garytestuser",
			"total_points": 0
		}
	]
}

```