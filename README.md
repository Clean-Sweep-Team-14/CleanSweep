# CleanSweep

# Clean Sweep

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
https://clean-sweep-team-14.herokuapp.com

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


