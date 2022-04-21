# Test Run webhooks

| Navigate |
| - |
| [run.started](#created) |
| [run.updated](#updated) |
| [run.aborted](#aborted) |
| [run.completed](#completed) |
| [run.deleted](#deleted) |
| [run.report_changed](#report_changed) |

## Started

Payload example:

```json
{
  "event_name": "run.started",
  "timestamp": 1650540069,
  "payload": {
    "id": 1,
    "title": "Test run 2022/04/21",
    "description": null,
    "plan": null,
    "cases_count": 14,
    "environment": null
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a new test run is started.

### Event name

`run.started`

### Payload fields

| Parameter   | Type   | Description                 |
|-------------|--------|-----------------------------|
| id          | int    | Test run ID                 |
| title       | string | Test run title              |
| description | string | Test run description        |
| plan_id     | int    | Test plan ID. Nullable.     |
| cases_count | int    | Amount of test cases in run |
| environment | string | Environment slug. Nullable. |

## Updated

Payload example:

```json
{
  "event_name": "run.updated",
  "timestamp": 1650540114,
  "payload": {
    "id": 1,
    "cases_added": 14
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test plan is updated and new test cases were added.

### Event name

`run.updated`

### Payload fields

| Parameter   | Type  | Description                           |
|-------------|-------|---------------------------------------|
| id          | int   | Test run ID                           |
| cases_added | array | Amount of test cases added to the run |

## Aborted

Payload example:

```json
{
  "event_name": "run.aborted",
  "timestamp": 1650540148,
  "payload": {
    "id": 1,
    "cases": 14,
    "passed": 0,
    "untested": 14,
    "failed": 0,
    "blocked": 0,
    "skipped": 0,
    "duration": 0
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test run is aborted.

### Event name

`run.aborted`

### Payload fields

| Parameter | Type | Description                   |
|-----------|------|-------------------------------|
| id        | int  | Test run ID                   |
| cases     | int  | Amount of test cases in a run |
| passed    | int  | Amount of passed cases        |
| failed    | int  | Amount of failed cases        |
| untested  | int  | Amount of untested cases      |
| blocked   | int  | Amount of blocked cases       |
| duration  | int  | Test run duration in seconds  |

## Completed

Payload example:

```json
{
  "event_name": "run.completed",
  "timestamp": 1650540194,
  "payload": {
    "id": 2,
    "cases": 14,
    "passed": 0,
    "failed": 0,
    "blocked": 0,
    "duration": 0
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test run is successfully completed.

### Event name

`run.completed`

### Payload fields

| Parameter | Type | Description                   |
|-----------|------|-------------------------------|
| id        | int  | Test run ID                   |
| cases     | int  | Amount of test cases in a run |
| passed    | int  | Amount of passed cases        |
| failed    | int  | Amount of failed cases        |
| blocked   | int  | Amount of blocked cases       |
| duration  | int  | Test run duration in seconds  |

## Deleted

Payload example:

```json
{
  "event_name": "run.deleted",
  "timestamp": 1650540289,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test run is deleted.

### Event name

`run.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Test run ID |

## Report visibility changed

Payload example:

```json
{
  "event_name": "run.report_changed",
  "timestamp": 1650540222,
  "payload": {
    "id": 2,
    "visible": true
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a public report visibility has been changed.

### Event name

`run.report_changed`

### Payload fields

| Parameter | Type    | Description                                |
|-----------|---------|--------------------------------------------|
| id        | int     | Test run ID                                |
| visible   | boolean | Shows if public report is available or not |
