## Created

Payload example:

```json
{
    "hash": "0223905c291bada23e6049d415385982af92d758",
    "title": "Shared step",
    "action": "Open web page",
    "expected_result": "Web page is opened"
}
```

This event is being sent when a new shared step is created.

### Event name

`shared_step.created`

### Payload fields

| Parameter       | Type   | Description                 |
|-----------------|--------|-----------------------------|
| hash            | string | Shared step hash            |
| title           | string | Shared step title           |
| action          | string | Shared step action          |
| expected_result | string | Shared step expected result |

## Updated

Payload example:

```json
{
    "hash": "0223905c291bada23e6049d415385982af92d758"
}
```

This event is being sent when a shared step is updated.

### Event name

`shared_step.updated`

### Payload fields

| Parameter | Type   | Description      |
|-----------|--------|------------------|
| id        | string | Shared step hash |

## Deleted

Payload example:

```json
{
    "hash": "0223905c291bada23e6049d415385982af92d758"
}
```

This event is being sent when a shared_step is deleted.

### Event name

`shared_step.deleted`

### Payload fields

| Parameter | Type   | Description      |
|-----------|--------|------------------|
| hash      | string | Shared step hash |
