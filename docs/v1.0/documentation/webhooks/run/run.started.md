---
title: "Test run webhooks"
excerpt: "Started event"
slug: "run.started"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

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
     "plan": {
      "id": 3,
      "title": "d"
    },
    "cases_count": 14,
    "environment": null
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new test run is started."
}
[/block]

### Event name

`run.started`

### Payload fields

| Parameter   | Type   | Description                 |
|-------------|--------|-----------------------------|
| id          | integer    | Test run ID                 |
| title       | string | Test run title              |
| description | string | Test run description        |
| plan        | object | Test plan ID and title.     |
| cases_count | integer    | Amount of test cases in run |
| environment | string | Environment slug. Nullable. |
