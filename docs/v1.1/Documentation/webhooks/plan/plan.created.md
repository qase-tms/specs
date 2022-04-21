---
title: "Test plan webhooks"
excerpt: "Created event"
slug: "plan.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

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
