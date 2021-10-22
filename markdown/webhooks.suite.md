## Created

Payload example:

```json
{
     "id": 1,
     "title": "Test suite",
     "description": "Authorization",
     "preconditions": "",
     "parent_id": null
}
```

This event is being sent when a new test suite is created.

### Event name

`suite.created`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test suite ID
title | string | Test suite title
description  | string | Test suite description
preconditions  | string | Test suite preconditions
parent_id  | int | ID of parent test suite

## Updated

Payload example:

```json
{
     "id": 5
}
```

This event is being sent when a test suite is updated. It returns only ID of test suite and notifies that fields were updated.

### Event name

`suite.updated`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test suite ID

## Deleted

Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a test suite is deleted.

### Event name

`suite.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test suite ID

## Cloned

Payload example:

```json
{
     "id": 2,
     "from_id": 1
}
```

This event is being sent when a test suite is cloned.

### Event name

`suite.cloned`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test suite ID (clone)
from_id | int | Test suite ID (original)
