# SDTV Form — Deep Links for ManyChat

Base URL: `https://form.socialdancetv.com` (after Railway deploy)
Local: `http://localhost:8001`

## Supported URL Parameters

| Parameter | Values | Effect |
|-----------|--------|--------|
| `flow` | `archive`, `preorder`, `visibility`, `walkup`, `monday` | Opens specific flow directly |
| `festival` | festival key (e.g. `benidorm-2026`) | Pre-selects festival (monday flow) or filters (archive flow) |
| `fest` | alias for `festival` | Same as above |
| `ig` | Instagram handle (e.g. `@dancername`) | Pre-fills dancer identity |
| `email` | email address | Pre-fills email, saves to localStorage |
| `source` | any string | Tracks traffic source (saved to state) |
| `utm_source` | any string | Alias for `source` |

## ManyChat Button URLs

### Find My Dance (Archive)
```
https://form.socialdancetv.com/?flow=archive
```
With festival pre-selected:
```
https://form.socialdancetv.com/?flow=archive&fest=mambo-nights
```
With IG pre-filled (skip typing):
```
https://form.socialdancetv.com/?flow=archive&ig={{instagram_handle}}
```

### Book Filming (Preorder)
```
https://form.socialdancetv.com/?flow=preorder
```

### Get Featured (Visibility)
```
https://form.socialdancetv.com/?flow=visibility
```

### Film Me Tonight (Walk-up)
For QR codes at the venue or DM during event:
```
https://form.socialdancetv.com/?flow=walkup
```

### Post-Event Notify (Monday Morning)
Send morning after the festival — "your video is being edited":
```
https://form.socialdancetv.com/?flow=monday&festival=benidorm-2026
```

### Delivery Page (Direct Video Link)
After purchase, sent via email:
```
https://form.socialdancetv.com/delivery?id=recXXXXXXXXXXXXXXX
```

## ManyChat Flow Examples

### Post-Festival Broadcast
1. User receives message: "Hey! We filmed at {Festival} this weekend 🎬"
2. Button: "Find My Dance" → `?flow=archive&fest={slug}&source=manychat`
3. Button: "Notify me when ready" → `?flow=monday&festival={slug}&source=manychat`

### Pre-Event Promo
1. User receives message: "We're filming at {Festival}! Book your spot 🎥"
2. Button: "Book Filming" → `?flow=preorder&source=manychat`
3. Button: "Learn more" → `?flow=visibility&source=manychat`

### At-Event Walk-up
1. Story/post with QR code → `?flow=walkup&source=qr`
2. DM auto-reply → `?flow=walkup&source=manychat-dm`

## Tracking

All ManyChat links should include `&source=manychat` (or `&utm_source=manychat`).
This is saved to Airtable People table via the `source` field on upsert.
