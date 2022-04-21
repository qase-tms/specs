# Test Plan webhooks

| Navigate |
| - |
| [plan.created](#created) |
| [plan.updated](#updated) |
| [plan.deleted](#deleted) |


## Created

Payload example:

```json
{
  "event_name": "plan.created",
  "timestamp": 1650534130,
  "payload": {
    "id": 2,
    "title": "dd",
    "description": "d",
    "cases": {
      "1033": 0
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a new test plan is created.

### Event name

`plan.created`

### Payload fields

| Parameter   | Type   | Description                 |
|-------------|--------|-----------------------------|
| id          | int    | Test plan ID                |
| title       | string | Test plan title             |
| description | string | Test plan description       |
| cases       | array  | An array with test case ids |

## Updated

Payload example:

```json
{
  "event_name": "plan.updated",
  "timestamp": 1650534183,
  "payload": {
    "id": 2,
    "cases": {
      "1033": 0
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test plan is updated.

### Event name

`plan.updated`

### Payload fields

| Parameter | Type  | Description                 |
|-----------|-------|-----------------------------|
| id        | int   | Test plan ID                |
| cases     | array | An array with test case ids |

## Deleted

Payload example:

```json
{
  "event_name": "plan.deleted",
  "timestamp": 1650534261,
  "payload": {
    "id": 59884
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test plan is deleted.

### Event name

`plan.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Test plan ID |
