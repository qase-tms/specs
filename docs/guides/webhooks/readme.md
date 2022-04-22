---
title: "Webhooks from Qase"
excerpt: "This page will help you get started use webhooks Qase."
slug: "webhooks"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

# Introduction

Welcome to the [Qase.io](https://qase.io) Webhooks documentation! Webhooks is a way to notify your services about
changes happened in Qase. A webhook consists of:

- An entity - the resource that generates the events (e.g. Test Case).
- One or more events (e.g. created).
- A URL - the endpoint where you want Qase to send the event payloads when a matching event happens.

This documentation describes the structure of events and their payloads.

There is also information about webhooks on our helper page [Webhooks | Help Center](https://help.qase.io/hc/en-us/articles/360014177737-Webhooks).

# Event structure

Request example:

```json
{
  "event_name": "shared_step.created",
  "timestamp": 1650540646,
  "payload": {
    "hash": "2563d587b756110934vea4185ce31b2b0dbf457c",
    "title": "test",
    "steps": [
      {
        "hash": "ed285acb6c7e575bce2576810c195ed8335e2812",
        "action": "action",
        "expected_result": "",
        "data": "",
        "attachments": []
      }
    ]
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
| payload        | object  | An object with payload data related to event |
| team_member_id | integer | Action initiator                             |
| project_code   | string  | Project code where the event takes place     |
