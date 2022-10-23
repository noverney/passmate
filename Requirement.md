## UI

Divice overview:
* List of devices
* Devices infos (name, ip, sync status)
* peering mode? (discovery)

Pasword Overview
* search bar
* Password (how secure)
* add password -> popup
* copy password
* popup detail -> edit
* delete password with progress over device
* icon -> grab
* sort creation date, name,

Password object 
```js
{
    userName: string,
    creationDate: date,
    password: string,
    syncDeviceNumbers: number,
}
```

Password popup:
* user-name
* password
* generate password
* site (optional)
* tags (optional)

Settings:
* Master password (several Masterkey)
* PW-Generator settings, minimal default.

## Backend

* password used verification -> pawnedMe
* password security check -> length etc
* getAll
* Safe Password
* Set new master key for device

### Nice to have
different add what kind (password key)
password recovery
force delte of a device

