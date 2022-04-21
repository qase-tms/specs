# Introduction

Welcome to the [Qase.io](https://qase.io) Webhooks documentation! Webhooks is a way to notify your services about
changes happened in Qase. A webhook consists of:

- An entity - the resource that generates the events (e.g. TestCase).
- One or more events (e.g. created).
- A URL - the endpoint where you want Qase to send the event payloads when a matching event happens.

This documentation describes the structure of events and their payloads.

# Event structure

Request example:

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

All requests that are produced by Qase are `POST` requests with data in `JSON` format with following data structure:

| Parameter      | Type    | Description                                  |
|----------------|---------|----------------------------------------------|
| event_name     | string  | Event name                                   |
| timestamp      | integer | Time when event has been triggered           |
| payload        | array   | An object with payload data related to event |
| team_member_id | integer | Action initiator                             |
| project_code   | string  | Project code where the event takes place     |
