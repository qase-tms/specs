---
title: "Test run webhooks"
excerpt: "Aborted event"
slug: "run.aborted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

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
