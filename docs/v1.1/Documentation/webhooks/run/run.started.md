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
