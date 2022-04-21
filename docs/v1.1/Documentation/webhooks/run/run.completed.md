---
title: "Test run webhooks"
excerpt: "Completed event"
slug: "run.completed"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

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
