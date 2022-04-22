---
title: "Test Suite"
excerpt: "This page contains information about events called in the entity Test Suite"
slug: "suite"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created Test Suite

Payload example:

```json
{
  "event_name": "suite.created",
  "timestamp": 1650540917,
  "payload": {
    "id": 312,
    "title": "d",
    "description": null,
    "preconditions": null,
    "parent_id": null
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new test suite is created."
}
[/block]

### Event name

`suite.created`

### Payload fields

| Parameter     | Type   | Description              |
|---------------|--------|--------------------------|
| id            | integer    | Test suite ID            |
| title         | string | Test suite title         |
| description   | string | Test suite description   |
| preconditions | string | Test suite preconditions |
| parent_id     | integer    | ID of parent test suite  |

## Cloned Test Suite

Payload example:

```json
{
  "event_name": "suite.cloned",
  "timestamp": 1650541053,
  "payload": {
    "id": 314,
    "from_id": 13
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test suite is cloned."
}
[/block]

### Event name

`suite.cloned`

### Payload fields

| Parameter | Type | Description              |
|-----------|------|--------------------------|
| id        | integer  | Test suite ID (clone)    |
| from_id   | integer  | Test suite ID (original) |

## Deleted Test Suite

Payload example:

```json
{
  "event_name": "suite.deleted",
  "timestamp": 1650540989,
  "payload": {
    "id": 313
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test suite is deleted."
}
[/block]

### Event name

`suite.deleted`

### Payload fields

| Parameter | Type | Description   |
|-----------|------|---------------|
| id        | integer  | Test suite ID |

## Updated Test Suite

Payload example:

```json
{
  "event_name": "suite.updated",
  "timestamp": 1650540955,
  "payload": {
    "id": 11
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test suite is updated. It returns only ID of test suite and notifies that fields were updated."
}
[/block]

### Event name

`suite.updated`

### Payload fields

| Parameter | Type | Description   |
|-----------|------|---------------|
| id        | integer  | Test suite ID |
